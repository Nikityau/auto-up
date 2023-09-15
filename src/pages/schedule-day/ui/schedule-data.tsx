import React from 'react';
import { dayScheduleStore } from '../store/day-schedule-store';
import LessonInfo from './lesson-info';
import LesssonTasks from './lesson-tasks';

const ScheduleData = () => {
    return (
        <div className='schedule-day__lesson-data'>
            <LessonInfo
                schedule={dayScheduleStore}
            />
            <LesssonTasks
                schedule={dayScheduleStore}
            />
        </div>
    );
};

export default ScheduleData;