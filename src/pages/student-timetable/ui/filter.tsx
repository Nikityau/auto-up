import React from 'react';
import MonthChange from "../../../feature/month-change";
import {studentTimetable} from "../index";
import TimetableTypes from "../../../feature/timetable-types";

const Filter = () => {
    return (
        <div className={'student-timetable__filter'}>
            <MonthChange
                timetable={studentTimetable}
            />
            <TimetableTypes
                timetable={studentTimetable}
            />
        </div>
    );
};

export default Filter;