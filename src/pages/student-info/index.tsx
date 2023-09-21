import React from 'react';
import StudentMiniInfo from './ui/student-mini-info';
import StudentInfoProvider from './provider';
import { TimetableStore } from '../../local-store/timetable/timtetable-store';
import Attendence from './ui/attendence';

import './style/index.scss'

export const studentAttendceCalendar = new TimetableStore('st-att') 

const StudentInfo = () => {
    return (
        <StudentInfoProvider>
            <div className='student-info'>
                <div className='sutendt-info__container app-container'>
                    <StudentMiniInfo />
                    <Attendence/>
                </div>
            </div>
        </StudentInfoProvider>
    );
};

export default StudentInfo;