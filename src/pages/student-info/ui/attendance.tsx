import React from 'react';
import AttendanceProvider from '../provider/attendance-provider';
import AttendanceSideBar from './attendce-side-bar';
import AttendanceCalendar from './attendance-calendar';
import TitleUi from '../../../shared/ui/page-title';
import { studentAttendanceCalendar } from '..';
import {cookieStore} from "../../../local-store/cookie/cookie-store";

const Attendance = () => {
    return (
        <AttendanceProvider cookie={cookieStore}>
            <div className='student-attendce'>
                <div className='student-attendce__title'>
                    <TitleUi title='Посещаемость'/>
                </div>
                <div className='student-attendce__container'>
                    <AttendanceSideBar />
                    <AttendanceCalendar
                        timetable={studentAttendanceCalendar}
                    />
                </div>
            </div>
        </AttendanceProvider>
    );
};

export default Attendance;