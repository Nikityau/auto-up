import React from 'react';

type Props = {
    position: number
}

const Control = ({position}:Props) => {
    return (
        <div className='student-group-card__control'>
            <div className='student-group-card__dots'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#807EE3" />
                    <circle cx="2.5" cy="13.5" r="2.5" fill="#807EE3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#807EE3" />
                    <circle cx="13.5" cy="2.5" r="2.5" fill="#807EE3" />
                    <circle cx="13.5" cy="13.5" r="2.5" fill="#807EE3" />
                    <circle cx="13.5" cy="24.5" r="2.5" fill="#807EE3" />
                </svg>
            </div>
            <div className='student-group-card__position'>
                <span>{position}</span>
            </div>
        </div>
    );
};

export default Control;