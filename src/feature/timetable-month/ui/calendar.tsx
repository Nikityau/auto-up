import React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import DateMonth from './date';
import { useMonthCalendar } from '../helpers/hooks/use-month-calendar';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

type Props = {
    timetable: TimetableStore
}

const Calendar = observer(({timetable}: Props) => {

    const datesGrid = useMonthCalendar(timetable.timetable.dates)

    return (
        <div className='timetable-month__calendar'>
            {
                datesGrid.map(el => (
                    <DateMonth
                        key={el.id}
                        number={el.date?.getDate() || 0}
                        isCurrentDate={datesCompare(el.date, timetable.timetable.now)}
                        isCurrentMonth={
                            timetable.timetable.activeDate.getMonth() == el.date.getMonth()
                        }
                    />
                ))
            }
        </div>
    );
});

export default Calendar;