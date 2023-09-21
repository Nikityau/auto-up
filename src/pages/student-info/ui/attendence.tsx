import React from 'react';
import AttendenceProvider from '../provider/attendence-provider';
import AttendenceSideBar from './attendce-side-bar';
import AttendenceCalendar from './attendence-calendar';
import PageTitle from '../../../shared/ui/page-title';
import { studentAttendceCalendar } from '..';

const Attendence = () => {
    return (
        <AttendenceProvider>
            <div className='student-attendce'>
                <div className='student-attendce__title'>
                    <PageTitle title='Посещаемость'/>
                </div>
                <div className='student-attendce__container'>
                    <AttendenceSideBar />
                    <AttendenceCalendar
                        timetable={studentAttendceCalendar}
                    />
                </div>
            </div>
        </AttendenceProvider>
    );
};

export default Attendence;