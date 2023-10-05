import React from "react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";

import TimetableMonth from "../../../feature/timetable-month";
import TimetableWeek from "../../../feature/timetable-week";
import TimetableDay from "../../../feature/timetable-day";
import DateGrid from "../../../feature/timetable-month/ui/date-grid";
import DayGrid from "../../../feature/timetable-week/ui/day";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import { useFetchTimetable } from "../helpers/hooks/use-fetch-timetable";
import { datesCompare } from "../../../shared/helpers/dates/dates-compare";
import { infoByDate, infosByDate } from "../../../shared/helpers/dates/info-by-date";
import DayScheduleCard from "../../../enteties/day-schedule-card";
import CalendarLesson from "../../../feature/calendar-lesson";
import { Link } from "react-router-dom";

type Props = {
  timetable: TimetableStore
}

const TimetableProvider = observer(({ timetable }: Props) => {

  const content = useFetchTimetable(timetable);

  if (timetable.type == "month") {
    return <TimetableMonth
      showCurrentDay={true}
      date={timetable.timetable.activeDate}
    >
      {
        timetable.timetable.month.map(d => (
          <DateGrid
            key={nanoid()}
            date={d}
          >
            {
              infoByDate(d, content?.dates, (d) => {
                const el = content.content?.find(c => datesCompare(c.date, d));

                return <Link to={`day/${el.id}`}
                             key={el.id}
                >
                  <CalendarLesson
                    id={nanoid()}
                    date={el.date}
                    courseTitle={el.courseTitle}
                    groupTitle={el.groupTitle}
                    theme={el.theme}
                    startTime={el.startTime}
                    endTime={el.endTime}
                    type={el.type}
                    isCurrent={true}
                    lessonPerDay={el.lessonPerDay}
                  />
                </Link>;
              })
            }
          </DateGrid>
        ))
      }
    </TimetableMonth>;
  }

  if (timetable.type == "week") {
    return <TimetableWeek>
      {
        timetable.week.map(t => (
          <DayGrid
            key={nanoid()}
            date={t}
          />
        ))
      }
    </TimetableWeek>;
  }

  if (timetable.type == "day") {
    return <div className={"timetable-day__wrapper"}>
      <TimetableDay>
        {
          infosByDate(timetable.day, content?.dates, (d) => {
            return content?.content.filter(el => datesCompare(el.date, d)).map(el => (
              <Link to={`day/${el.id}`} key={el.id}>
                <DayScheduleCard
                  groupTitle={el.groupTitle}
                  theme={el.theme}
                  timeStart={el.startTime}
                  timeEnd={el.endTime}
                  type={el.type}
                />
              </Link>
            ))

          })
        }
      </TimetableDay>
    </div>;
  }

  return null;
});

export default TimetableProvider;