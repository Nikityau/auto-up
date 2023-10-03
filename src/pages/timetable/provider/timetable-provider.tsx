import React from "react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";

import TimetableMonth from "../../../feature/timetable-month";
import TimetableWeek from "../../../feature/timetable-week";
import TimetableDay from "../../../feature/timetable-day";
import DateGrid from "../../../feature/timetable-month/ui/date-grid";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import { useFetchTimetable } from "../helpers/hooks/use-fetch-timetable";
import { datesCompare } from "../../../shared/helpers/dates/dates-compare";
import { infoByDate } from "../../../shared/helpers/dates/info-by-date";
import DayGrid from "../../../feature/timetable-week/ui/day";
import { toWeekDayStr } from "../../../shared/helpers/dates/to-weekday-str";

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
                  return content.content?.find(c => datesCompare(c.date, d)).content
              })
            }
          </DateGrid>
        ))
      }
    </TimetableMonth>;
  }

  if(timetable.type == 'week') {
      return <TimetableWeek>
        {
          timetable.week.map(t => (
            <DayGrid
              key={nanoid()}
              date={t.getDate()}
              day={toWeekDayStr(t.getDay())}
            />
          ))
        }
      </TimetableWeek>
  }

  if(timetable.type == 'day') {
      return <TimetableDay />;
  }

  return null;
});

export default TimetableProvider;