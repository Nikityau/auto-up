import React from 'react';
import cn from 'classnames'

type Props = {
    number: number,
    isCurrentMonth: boolean
} & React.PropsWithChildren

const DateMonth = ({number, isCurrentMonth,children}: Props) => {
    return (
        <div className={cn(
            'date-month',
            isCurrentMonth 
            ? '' : 'date-month_another'
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