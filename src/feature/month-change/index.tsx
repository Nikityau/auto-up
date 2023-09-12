import React from 'react';
import CurrentMonth from './ui/current-month';
import ChangeBtns from './ui/change-bnts';
import { lecturerTimetable } from '../../local-store/timetable/timtetable-store';

import './style/index.scss'

const MonthChange = () => {
    return (
        <div className='month-change'>
            <CurrentMonth
                timetable={lecturerTimetable}
            />
            <ChangeBtns/>
        </div>
    );
};

export default MonthChange;