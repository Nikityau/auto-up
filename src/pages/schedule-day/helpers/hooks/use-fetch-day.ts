import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import { DayScheduleStore } from "../../store/day-schedule-store";
import { LoaderStore } from "../../../../local-store/loader/loader-store";

import { baseUrl } from "../../../../shared/api/base-url";
import { scheduleAdapter } from "../../../timetable/helpers/adapter/schedule.adapter";
import { scheduleDayAdapter } from "../adapter/schedule-day.adapter";

export const useFetchDay = (cookie: CookieStore, daySchedule: DayScheduleStore, loader: LoaderStore) => {
  const {date} = useParams()

  useEffect(() => {
    (async () => {
      loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)
      const resLesson = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
        headers: {
          Authorization: `Token ${cookie.token}`
        },
        data: {
          date,
        }
      })

      console.log(resLesson.data);

      const adaptedLesson = await scheduleAdapter(resLesson.data)
      const scheduleAdapted = await scheduleDayAdapter(adaptedLesson.schedule, cookie.token)
      console.log('adapted',scheduleAdapted);
      daySchedule.setSchedule(scheduleAdapted)
      loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
    })()
  }, [])
}