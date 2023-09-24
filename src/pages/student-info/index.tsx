import React from 'react';
import StudentMiniInfo from './ui/student-mini-info';
import StudentInfoProvider from './provider';
import { TimetableStore } from '../../local-store/timetable/timtetable-store';
import Attendance from './ui/attendance';
import StudentSuccess from './ui/student-success';

import './style/index.scss'

export const studentAttendanceCalendar = new TimetableStore('st-att')

const StudentInfo = () => {
    return (
        <StudentInfoProvider>
            <div className='student-info'>
                <div className='student-info__container app-container'>
                    <StudentMiniInfo />
                    <Attendance/>
                    <StudentSuccess/>
                </div>
            </div>
        </StudentInfoProvider>
    );
};

export default StudentInfo;