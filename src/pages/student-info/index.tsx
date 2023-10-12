import React from 'react';
import StudentMiniInfo from './ui/student-mini-info';
import StudentInfoProvider from './provider';
import {TimetableStore} from '../../local-store/timetable/timtetable-store';
import Attendance from './ui/attendance';
import StudentSuccess from './ui/student-success';
import {cookieStore} from "../../local-store/cookie/cookie-store";
import {loaderStore} from "../../local-store/loader/loader-store";

import './style/index.scss'

export const studentAttendanceCalendar = new TimetableStore('st-att')

const StudentInfo = () => {
    return (
        <StudentInfoProvider cookie={cookieStore} loader={loaderStore}>
            <div className='student-info'>
                <div className='student-info__container app-container'>
                    <StudentMiniInfo/>
                    <Attendance/>
                    <StudentSuccess/>
                </div>
            </div>
        </StudentInfoProvider>
    );
};

export default StudentInfo;