import React from 'react';
import Tabs from './tabs';
import ScheduleData from './schedule-data';
import { dayScheduleStore } from '../store/day-schedule-store';

const Schedule = () => {
    return (
        <div className='schedule-day__schedule'>
            <Tabs
                schedule={dayScheduleStore}
            />
            <ScheduleData/>
        </div>
    );
};

export default Schedule;