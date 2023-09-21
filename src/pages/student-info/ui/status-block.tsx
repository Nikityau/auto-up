import React from 'react';
import cn from 'classnames'

type Props = {
    classNames?: string[],
    text?: string
}

const StatusBlock = ({ classNames, text }: Props) => {
    return (
        <div className={cn(
            'status-block',
            classNames
        )}>
            <div className='status-block__status'>
            </div>
            {
                text &&
                <div className='status-block__text'>
                    <p>{text}</p>
                </div>
            }
        </div>
    );
};

export default StatusBlock;