import React from 'react';
import cn from 'classnames'

type Props = {
    title: string,
    is: boolean | null,
    onClick: () => void
}

const Status = ({ is, title, onClick }: Props) => {
    return (
        <div
            className={cn(
                'student-day-card__status',
                is && 'student-day-card__status_active'
            )}
            onClick={onClick}>
            <div className='student-day-card__status-title'>
                <span>{title}</span>
            </div>
            <div className={cn(
                'student-day-card__status-circle',
            )}>
                {
                    is
                        ?
                        <div className='student-day-card__status-circle-inner'>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    );
};

export default Status;