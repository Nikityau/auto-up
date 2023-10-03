import React from 'react';
import Weekdays from './ui/weekdays';
import Calendar from './ui/calendar';
import MonthProvider from './provider/month-provider';

import './style/index.scss'

export interface Content {
    id: string
    date: Date,
    content: JSX.Element
}

type Props = {
    date: Date
    showCurrentDay?: boolean
} & React.PropsWithChildren

const TimetableMonth = ({ children, date, showCurrentDay = false }: Props) => {
    return (
        <MonthProvider
            gridChild={children}
            date={date}
            showCurrentDay={showCurrentDay}
        >
            <div className='timetable-month'>
                <Weekdays />
                <Calendar />
            </div>
        </MonthProvider>
    );
};

export default TimetableMonth;