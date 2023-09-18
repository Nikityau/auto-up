import React from 'react';
import { useMonthTimetable } from '../helpers/hooks/use-month-timetable';

type Props = {
    date: Date,
    gridChild: React.ReactNode,
    showCurrentDay: boolean
} & React.PropsWithChildren

export const MonthContext = React.createContext(null)

const MonthProvider = ({date, gridChild, children, showCurrentDay = false}:Props) => {

    const grid = useMonthTimetable(gridChild, date)

    return (
        <MonthContext.Provider value={{
            grid,
            showCurrentDay
        }}>
            {children}
        </MonthContext.Provider>
    );
};

export default MonthProvider;