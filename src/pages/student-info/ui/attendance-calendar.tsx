import React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';

import TimetableMonth from '../../../feature/timetable-month';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';

import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

import {studentAttendance} from "../data/student-info";

type Props = {
    timetable: TimetableStore
}

const AttendanceCalendar = observer(({timetable}:Props) => {

    const byDate = (d: Date): JSX.Element => {
       const el = studentAttendance.attendance.find(el => datesCompare(el.date, d))

       if(el) {
        return (
            <span>
                {
                    el.theme
                } 
            </span>
        )
       }

        return null
    }

    const isWas = (d: Date) => {
        const el = studentAttendance.attendance.find(el => datesCompare(el.date, d))

        if(!el) {
            return null
        }

        if(el.was) {
            return 'date_bg_green'
        }

        return 'date_bg_red'
    }

    return (
        <div className='attendence-calendar'>
            <TimetableMonth
                showCurrentDay={false}
                date={timetable.timetable.activeDate}
            >
                {
                    timetable.timetable.dates.map(t => (
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