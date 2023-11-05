import React from 'react';
import AttendanceProvider from '../provider/attendance-provider';
import AttendanceSideBar from './attendce-side-bar';
import AttendanceCalendar from './attendance-calendar';
import TitleUi from '../../../shared/ui/page-title';
import {cookieStore} from "../../../local-store/cookie/cookie-store";
import {attendanceTimetable} from "../index";


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
                        timetable={attendanceTimetable}
                    />
                </div>
            </div>
        </AttendanceProvider>
    );
};

export default Attendance;