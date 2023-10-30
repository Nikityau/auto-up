import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";

import NavByRole from "../../../enteties/nav-by-role";
import TimetableMonth from "../../../feature/timetable-month";
import TimetableWeek from "../../../feature/timetable-week";
import TimetableDay from "../../../feature/timetable-day";
import DateGrid from "../../../feature/timetable-month/ui/date-grid";
import DayGrid from "../../../feature/timetable-week/ui/day";
import CalendarLesson from "../../../feature/calendar-lesson";
import DayInfo from "../../../feature/timetable-week/ui/day-info";
import { dayTime } from "../../../feature/timetable-day/data/time";

import { useFetchTimetable } from "../helpers/hooks/use-fetch-timetable";
import { datesCompare } from "../../../shared/helpers/dates/dates-compare";
import { infoByDate, infosByDate } from "../../../shared/helpers/dates/info-by-date";

import DayScheduleCard from "../../../enteties/day-schedule-card";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import DayControlPanel from "../../../feature/day-control-panel";
import Month from "../ui/month";
import Week from "../ui/week";
import Day from "../ui/day";

type Props = {
  timetable: TimetableStore,
  loaderStore: LoaderStore
}

const TimetableProvider = observer(({ timetable, loaderStore }: Props) => {

  const content = useFetchTimetable(loaderStore);

  if (timetable.type == "month") 
      return <Month timetable={timetable} content={content}/>


  if (timetable.type == "week") 
      return <Week timetable={timetable} content={content}/>

  if (timetable.type == "day")
      return <Day timetable={timetable} content={content}/>

  return null;
});

export default TimetableProvider;