import React from 'react';
import MonthChange from '../../../feature/month-change';
import CourseInfo from './course-info';
import AttendanceInfo from './attendance-info';
import {attendanceTimetable} from "../index";

const AttendanceSideBar = () => {
    return (
        <div className='student-attendce__side-bar'>
            <MonthChange
                timetable={attendanceTimetable}
            />
            <div className='student-attendce__side-bar-wrrapper'>
                <CourseInfo />
                <AttendanceInfo />
            </div>
        </div>
    );
};

export default AttendanceSideBar;