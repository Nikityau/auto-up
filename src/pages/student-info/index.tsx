import React from 'react';

import StudentMiniInfo from './ui/student-mini-info';
import StudentInfoProvider from './provider';
import Attendance from './ui/attendance';
import StudentSuccess from './ui/student-success';
import {cookieStore} from "../../local-store/cookie/cookie-store";
import {Timetable} from "../../local-store/timetable/timetable";

import './style/index.scss'

export const attendanceTimetable = new Timetable()

const StudentInfo = () => {
    return (
        <StudentInfoProvider cookie={cookieStore}>
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