import React from 'react';
import {TimetableStore} from "../../local-store/timetable/timtetable-store";

import Filter from "./ui/filter";
import Calendar from "./ui/calendar";

import './style/index.scss'
import TitleUi from "../../shared/ui/page-title";
import {cookieStore} from "../../local-store/cookie/cookie-store";
import {loaderStore} from "../../local-store/loader/loader-store";
import {errorStore} from "../../local-store/error-store";

export const studentTimetable = new TimetableStore('student')

const StudentTimetable = () => {
    return (
        <div className={'student-timetable'}>
            <div className={'student-timetable__container app-container'}>
                <TitleUi title={'Расписание'}/>
                <div className={'student-timetable__wrapper'}>
                    <Filter/>
                    <Calendar
                        cookie={cookieStore}
                        timetable={studentTimetable}
                        loader={loaderStore}
                        error={errorStore}
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentTimetable;