import React from 'react';

type Props = {
  tip: string
}

const Tip = ({tip}:Props) => {
    return (
        <div className={'task-description__tip'}>
            <div className={'task-description__tip-icon'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z" stroke="white"/>
                </svg>
            </div>
            <div className={'task-description__tip-text'}>
                <span>{tip}</span>
            </div>
        </div>
    );
};

export default Tip;