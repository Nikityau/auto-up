import React from 'react';
import TimetableMonth from "../../../feature/timetable-month";
import DateGrid from "../../../feature/timetable-month/ui/date-grid";
import {nanoid} from "nanoid";
import TimetableWeek from "../../../feature/timetable-week";
import TimetableDay from "../../../feature/timetable-day";
import {TimetableStore} from "../../../local-store/timetable/timtetable-store";
import {useFetchStudentTimetable} from "../helpers/hooks/use-fetch-student-timetable";
import {datesCompare} from "../../../shared/helpers/dates/dates-compare";
import {observer} from "mobx-react-lite";
import { infoByDate } from "../../../shared/helpers/dates/info-by-date";

type Props = {
    timetable: TimetableStore
}

const Calendar = observer(({timetable}:Props) => {

    const content = useFetchStudentTimetable(timetable)

    if(timetable.type == 'month') {
        return (
          <TimetableMonth
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
                                return content?.content.find(dc => datesCompare(dc.date, d)).content
                            })
                        }
                    </DateGrid>
                  ))
              }
          </TimetableMonth>
        )
    }

    if(timetable.type == 'week') {
        return <TimetableWeek />
    }

    if(timetable.type == 'day') {
        return <TimetableDay />
    }

    return null
});

export default Calendar;