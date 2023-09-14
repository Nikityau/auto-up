import React from 'react';
import Weekdays from './ui/weekdays';
import Calendar from './ui/calendar';

import { TimetableStore } from '../../local-store/timetable/timtetable-store';

import './style/index.scss'

export interface Content {
    id: string
    date: Date,
    content: JSX.Element
}

type Props = {
    showCurrentDay?: boolean
    content?: Content[]
    timetable: TimetableStore
} & React.PropsWithChildren

const TimetableMonth = ({ children, timetable, content,showCurrentDay = true }: Props) => {
    return (
        <div className='timetable-month'>
            <Weekdays />
            <Calendar
                showCurrentDay={showCurrentDay}
                timetable={timetable}
                content={content}
            />
        </div>
    );
};

export default TimetableMonth;