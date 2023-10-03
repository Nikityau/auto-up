import React from 'react';

import './style/index.scss'

type Props = {
    showCurrentDay?: boolean
} & React.PropsWithChildren

const TimetableWeek = ({showCurrentDay = false,children}:Props) => {
    return (
        <div className='timetable-week'>
            {
                children
            }
        </div>
    );
};

export default TimetableWeek;