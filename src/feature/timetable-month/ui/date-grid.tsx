import React from 'react';
import cn from 'classnames'

type Props = {
    day: number
} & React.PropsWithChildren

const DateGrid = ({day, children}:Props) => {
    return (
        <div className={cn(
            'date-month'
        )}>
            <div className='date-month__date'>
                <span>
                    {
                        day < 10 
                        ? `0${day}`
                        : day
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