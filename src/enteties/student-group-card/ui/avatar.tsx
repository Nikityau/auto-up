import React from 'react';

type Props = {
    avatar: string
}

const Avatar = ({avatar}:Props) => {
    return (
        <div className='student-group-card__avatar'
            style={{
                backgroundImage: `url(${avatar})`
            }}
        >
        </div>
    );
};

export default Avatar;