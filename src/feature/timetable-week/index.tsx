import React from 'react';

import WeekProvider from "./provider/week-provider";

import './style/index.scss'

type Props = {
    showCurrentDay?: boolean
} & React.PropsWithChildren

const TimetableWeek = ({showCurrentDay = false,children}:Props) => {
    return (
        <WeekProvider showCurrentDay={showCurrentDay}>
            <div className='timetable-week'>
                {
                    children
                }
            </div>
        </WeekProvider>
    );
};

export default TimetableWeek;