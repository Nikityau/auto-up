import React, { useEffect } from 'react';
import MonthChange from '../../../feature/month-change';
import TimetableTypes from '../../../feature/timetable-types';

const Filters = () => {
    return (
        <div className='timetable-filters'>
            <MonthChange/>
            <TimetableTypes/>
        </div>
    );
};

export default Filters;