import React from 'react';
import MonthChange from '../../../feature/month-change';
import { studentAttendceCalendar } from '..';
import CourseInfo from './course-info';
import AttendenceInfo from './attendence-info';

const AttendenceSideBar = () => {
    return (
        <div className='student-attendce__side-bar'>
            <MonthChange
                timetable={studentAttendceCalendar}
            />
            <div className='student-attendce__side-bar-wrrapper'>
                <CourseInfo />
                <AttendenceInfo />
            </div>
        </div>
    );
};

export default AttendenceSideBar;