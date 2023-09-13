import React from 'react';
import cn from 'classnames'

type Props = {
    number: number,
    isCurrentMonth: boolean,
    isCurrentDate: boolean
} & React.PropsWithChildren

const DateMonth = ({number, isCurrentMonth, isCurrentDate,children}: Props) => {
    return (
        <div className={cn(
            'date-month',
            isCurrentMonth 
            ? '' : 'date-month_another',
            isCurrentDate 
            ? 'date-month_current' : ''
        )}>
            <div className='date-month__date'>
                <span>
                    {
                        number < 10 
                        ? `0${number}`
                        : number
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

export default DateMonth;