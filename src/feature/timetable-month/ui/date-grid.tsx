import React, { useContext } from 'react';
import cn from 'classnames'
import { MonthContext } from '../provider/month-provider';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

type Props = {
    date: Date,
    isInCurrentMonth?: boolean
} & React.PropsWithChildren

const DateGrid = ({date,isInCurrentMonth = false, children}:Props) => {

    const {showCurrentDay} = useContext(MonthContext)

    return (
        <div className={cn(
            'date-month',
            isInCurrentMonth && 'date-month_another',
            datesCompare(new Date(), date) && showCurrentDay && 'date-month_current'
        )}>
            <div className='date-month__date'>
                <span>
                    {
                        date.getDate() < 10 
                        ? `0${date.getDate()}`
                        : date.getDate()
                    }
                </span>
            </div>
            <div className='date-month__data'>
                {
                    children
                }
            </div>
        </div>
    );
};

export default DateGrid;