import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import { Content } from "../../../../feature/timetable-month";
import CalendarLesson from "../../../../feature/calendar-lesson";

import { TimetableStore } from "../../../../local-store/timetable/timtetable-store";
import { CourseInterface } from "../../../../shared/helpers/types/course.interface";

type Timetable = {
  dates: Date[],
  content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = (timetable: TimetableStore) => {
  const [state, setState] = useState<Timetable>(null);

  useEffect(() => {
    const dates = [
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
    });
  }, []);

  return state;
};