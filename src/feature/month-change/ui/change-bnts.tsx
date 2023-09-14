import React from 'react';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';

type Props = {
    timetable: TimetableStore
}

const ChangeBtns = ({timetable}:Props) => {
    return (
        <div className='month-change__btns'>
            <div className='month-change__prev'
                onClick={() => {
                    timetable.prevMonth()
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.81641 11.825L9.64141 8L5.81641 4.175L6.99974 3L11.9997 8L6.99974 13L5.81641 11.825Z" fill="white" />
                </svg>
            </div>
            <div className='month-change__next'
                onClick={() => {
                    timetable.nextMonth()
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.81641 11.825L9.64141 8L5.81641 4.175L6.99974 3L11.9997 8L6.99974 13L5.81641 11.825Z" fill="white" />
                </svg>
            </div>
        </div>
    );
};

export default ChangeBtns;