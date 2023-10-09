import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { TimetableStore } from "../../../../local-store/timetable/timtetable-store";
import { CourseInterface } from "../../../../shared/helpers/types/course.interface";
import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import { scheduleAdapter } from "../adapter/schedule.adapter";
import { loaderStore, LoaderStore } from "../../../../local-store/loader/loader-store";

type Timetable = {
  dates: Date[],
  content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = (timetable: TimetableStore, cookieStore: CookieStore, loader: LoaderStore) => {
  const [state, setState] = useState<Timetable>(null);

  useEffect(() => {
    if(!cookieStore?.token) return

    (async () => {
      loaderStore.add(`${baseUrl}/api/v1/study_groups/schedule/`)
      const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
        headers: {
          Authorization: `Token ${cookieStore.token}`
        }
      })

      const adapted = await scheduleAdapter(data)

      setState({
        dates: adapted.dates,
        content: adapted.schedule
      })
      loaderStore.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
    })()
  }, [cookieStore])

  useEffect(() => {
    /*const dates = [
      new Date(),
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2)
    ];

    const content: Omit<CourseInterface, "isCurrent">[] = [
      {
        id: nanoid(),
        type: "online",
        date: dates[0],
        startTime: "11:00",
        endTime: "12:00",
        theme: "Урок 01 - Введение в языки Python",
        lessonPerDay: 2,
        groupTitle: "Python 1",
        courseTitle: "Python start"
      },
      {
        id: nanoid(),
        type: "offline",
        date: dates[1],
        startTime: "11:00",
        endTime: "12:00",
        theme: "Урок 01 - Введение в языки Python",
        lessonPerDay: 1,
        groupTitle: "Python 1",
        courseTitle: "Python start"
      },
        {
            id: nanoid(),
            type: "online",
            date: dates[0],
            startTime: "13:00",
            endTime: "14:30",
            theme: "Урок 01 - Введение в языки Python",
            lessonPerDay: 2,
            groupTitle: "Python 2",
            courseTitle: "Python start"
        },
    ];

    setState({
      content: content,
      dates: dates
    });*/
  }, []);

  return state;
};