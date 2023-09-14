import React from 'react';
import UpInfo from './up-info';
import { dayScheduleStore } from '../store/day-schedule-store';

const ScheduleData = () => {
    return (
        <div className='schedule-day__lesson-data'>
            <UpInfo
                schedule={dayScheduleStore}
            />
        </div>
    );
};

export default ScheduleData;