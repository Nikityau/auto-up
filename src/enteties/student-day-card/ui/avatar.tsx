import React from 'react';

type Props = {
    avatar: string
}

const Avatar = ({avatar}:Props) => {
    return (
        <div className='student-day-card__avatar'
            style={{
                backgroundImage: `url(${avatar})`
            }}
        >
        </div>
    );
};

export default Avatar;