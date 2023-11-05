import React, { useContext } from "react";
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';

import TimetableMonth from '../../../feature/timetable-month';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';

import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

import {studentAttendance} from "../data/student-info";
import { StudentInfoContext } from "../provider";
import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
    timetable: Timetable
}

const AttendanceCalendar = observer(({timetable}:Props) => {

    const {att} = useContext(StudentInfoContext)
  
    const byDate = (date: Date): JSX.Element => {
      const el = att?.find(d => datesCompare(d.startDate, date))

       if(el) {
        return (
            <span>
                {
                    el.lesson
                } 
            </span>
        )
       }

        return null
    }

    const isWas = (date: Date) => {
        const el = att?.find(d => datesCompare(d.startDate, date))

        if(!el) {
            return null
        }

        if(el.studentAttend) {
            return 'date_bg_green'
        }

        return 'date_bg_red'
    }

    return (
        <div className='attendence-calendar'>
            <TimetableMonth
                showCurrentDay={false}
                date={timetable.active}
            >
                {
                    timetable.days.map(t => (
                        <DateGrid
                            date={t}
                            key={nanoid()}
                            classNames={[
                                'date_vert',
                                isWas(t)
                            ]}
                        >
                            {
                                byDate(t)
                            }
                        </DateGrid>
                    ))
                }
            </TimetableMonth>
        </div>
    );
});

export default AttendanceCalendar;