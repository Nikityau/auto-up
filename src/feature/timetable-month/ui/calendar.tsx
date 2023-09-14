import React from 'react';
import { observer } from 'mobx-react-lite';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import DateMonth from './date';
import { useMonthCalendar } from '../helpers/hooks/use-month-calendar';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';
import { Content } from '..';

type Props = {
    timetable: TimetableStore,
    content?: Content[],
    showCurrentDay: boolean
} & React.PropsWithChildren

const Calendar = observer(({timetable, showCurrentDay,content}: Props) => {

    const datesGrid = useMonthCalendar(timetable.timetable.dates)

    const byDate = (date: Date, content: Content[]): JSX.Element | null => {
        if(!content) return null

        for(let i = 0; i < content.length; ++i) {
            if(!content[i].content) {
                continue
            }

            if(datesCompare(content[i].date, date)) {
                return content[i].content
            }
        }

        return null
    }

    return (
        <div className='timetable-month__calendar'>
            {
                datesGrid.map(el => (
                    <DateMonth
                        key={el.id}
                        number={el.date?.getDate() || 0}
                        isCurrentDate={datesCompare(el.date, timetable.timetable.now) && showCurrentDay}
                        isCurrentMonth={
                            timetable.timetable.activeDate.getMonth() == el.date.getMonth()
                        }
                    >
                        {
                            byDate(el.date, content)
                        }
                    </DateMonth>
                ))
            }
        </div>
    );
});

export default Calendar;