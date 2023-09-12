import React from 'react';
import Weekdays from './ui/weekdays';
import Calendar from './ui/calendar';

import { lecturerTimetable } from '../../local-store/timetable/timtetable-store';

import './style/index.scss'

const TimetableMonth = () => {
    return (
        <div className='timetable-month'>
            <Weekdays/>
            <Calendar
                timetable={lecturerTimetable}
            />
        </div>
    );
};

export default TimetableMonth;