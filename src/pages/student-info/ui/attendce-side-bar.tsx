import React from 'react';
import MonthChange from '../../../feature/month-change';
import { studentAttendanceCalendar } from '..';
import CourseInfo from './course-info';
import AttendanceInfo from './attendance-info';

const AttendanceSideBar = () => {
    return (
        <div className='student-attendce__side-bar'>
            <MonthChange
                timetable={studentAttendanceCalendar}
            />
            <div className='student-attendce__side-bar-wrrapper'>
                <CourseInfo />
                <AttendanceInfo />
            </div>
        </div>
    );
};

export default AttendanceSideBar;