import React from 'react';
import Students from './ui/students';
import Schedule from './ui/schedule';

import './style/index.scss'

const ScheduleDay = () => {
    return (
        <div className='schedule-day'>
            <div className='schedule-day__container app-container'>
                <Schedule/>
                <Students/>
            </div>
        </div>
    );
};

export default ScheduleDay;