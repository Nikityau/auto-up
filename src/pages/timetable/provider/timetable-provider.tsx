import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";

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
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import DayControlPanel from "../../../feature/day-control-panel";

type Props = {
  timetable: TimetableStore,
  cookieStore: CookieStore,
  loaderStore: LoaderStore
}

const TimetableProvider = observer(({ timetable, cookieStore, loaderStore }: Props) => {

  const content = useFetchTimetable(timetable, cookieStore, loaderStore);

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

                return (
                  <Link to={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`}
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
                  </Link>
                );
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
          >
            {
              infosByDate(t, content?.dates, (d) => {
                return content?.content.filter(el => datesCompare(el.date, d)).map((el, i) => (
                  <Link to={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`} key={el.id}>
                    <DayInfo
                      number={i}
                      group={el.groupTitle}
                      course={el.courseTitle}
                      theme={el.theme}
                      startTime={el.startTime}
                      endTime={el.endTime}
                      type={el.type}
                    />
                  </Link>
                ));
              })
            }
          </DayGrid>
        ))
      }
    </TimetableWeek>;
  }

  if (timetable.type == "day") {
    return <div className={"timetable-day__wrapper"}>
      <TimetableDay
        ControlPanel={
          <DayControlPanel
            timetable={timetable}
          />
        }
      >
        {
          infosByDate(timetable.day, content?.dates, (d) => {
            return content?.content.filter(el => datesCompare(el.date, d)).map(el => (
              <Link to={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`} key={el.id}>
                <DayScheduleCard
                  offsetTop={(() => {
                    const [h, min] = el.startTime.split(":");
                    const time = dayTime.findIndex(d => {
                      return d.time.split(":")[0] == h;
                    });

                    return time * 86 + 86 * Number(min) / 60;
                  })()}
                  groupTitle={el.groupTitle}
                  theme={el.theme}
                  timeStart={el.startTime}
                  timeEnd={el.endTime}
                  type={el.type}
                />
              </Link>
            ));
          })
        }
        {/*{
          content?.content.filter(el => true).map(el => (
            <Link to={`day/${el.id}`} key={el.id}>
              <DayScheduleCard
                offsetTop={(() => {
                  const [h, min] = el.startTime.split(':')
                  const time = dayTime.findIndex(d => {
                    return d.time.split(':')[0] == h
                  })

                  return time * 86 + 86 * Number(min) / 60
                })()}
                groupTitle={el.groupTitle}
                theme={el.theme}
                timeStart={el.startTime}
                timeEnd={el.endTime}
                type={el.type}
              />
            </Link>
          ))
        }*/}
      </TimetableDay>
    </div>;
  }

  return null;
});

export default TimetableProvider;