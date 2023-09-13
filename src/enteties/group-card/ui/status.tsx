import React from 'react';

type Props = {
    status: string
}

const Status = ({status}: Props) => {
    return (
        <div className='group-card__status'>
            <div className='group-card__status-title'>
                <span>Статус:</span>
            </div>
            <div className='group-card__status-inscription'>
                <span>{status}</span>
            </div>
        </div>
    );
};

export default Status;