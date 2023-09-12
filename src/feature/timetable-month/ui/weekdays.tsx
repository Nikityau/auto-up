import React from 'react';
import { weekdays } from '../data/weekdays';

const Weekdays = () => {
    return (
        <div className='timetable-month__weekdays'>
            {
                weekdays.map(w => (
                    <div className='timetable-month__weekday'
                        key={w.id}
                    >
                        <span>{w.wekday}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Weekdays;