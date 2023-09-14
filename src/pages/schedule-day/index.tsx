import React from 'react';
import Students from './ui/students';

import './style/index.scss'
import Schedule from './ui/schedule';

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