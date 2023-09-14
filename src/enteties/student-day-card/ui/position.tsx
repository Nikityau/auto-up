import React from 'react';

type Props = {
    position: number
}

const Position = ({position}:Props) => {
    return (
        <div className='student-day-card__position'>
            <span>{position}</span>
        </div>
    );
};

export default Position;