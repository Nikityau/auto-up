import React, { useEffect } from 'react';
import MonthChange from '../../../feature/month-change';
import TimetableTypes from '../../../feature/timetable-types';
import { lecturerTimetable } from '../../../local-store/timetable/timtetable-store';

const Filters = () => {
    return (
        <div className='timetable-filters'>
            <MonthChange
                timetable={lecturerTimetable}
            />
            <TimetableTypes/>
        </div>
    );
};

export default Filters;