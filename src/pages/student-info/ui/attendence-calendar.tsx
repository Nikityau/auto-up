import React from 'react';
import TimetableMonth from '../../../feature/timetable-month';
import { studentAttendceCalendar } from '..';
import { observer } from 'mobx-react-lite';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';
import { nanoid } from 'nanoid';
import { stAttStatus } from '../data/student';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

type Props = {
    timetable: TimetableStore
}

const AttendenceCalendar = observer(({timetable}:Props) => {

    const byDate = (d: Date): JSX.Element => {
       const el = stAttStatus.attendence.find(el => datesCompare(el.date, d))

       if(el) {
        return (
            <span>
                {
                    el.lessonTitle
                }
            </span>
        )
       }

        return null
    }

    const isWas = (d: Date) => {
        const el = stAttStatus.attendence.find(el => datesCompare(el.date, d))

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

export default AttendenceCalendar;