import React, { useContext } from 'react';
import { MonthContext } from '../provider/month-provider';

type Props = {
   
} & React.PropsWithChildren

const Calendar = ({children}: Props) => {
    const {grid} = useContext(MonthContext)

    return (
        <div className='timetable-month__calendar'>
            {grid}
        </div>
    );
};

export default Calendar;