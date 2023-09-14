import React from 'react';
import cn from 'classnames'

type Props = {
    number: number
    onClick: () => void,
    isCurrent: boolean
}

const Tab = ({
    isCurrent,
    number,
    onClick
}:Props) => {
    return (
        <div className={cn(
            'schedule-day__tab',
            isCurrent && 'schedule-day__tab_current'
        )}
            onClick={onClick}
        >
            <span>{number}</span>
        </div>
    );
};

export default Tab;