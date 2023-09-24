import React from 'react';

type Props = {
    lessonNumber: number,
    theme: string
}

const Title = ({lessonNumber, theme}:Props) => {
    return (
        <div className={'student-success-card__title'}>
            <div className={'student-success-card__lesson'}>
                <span>Урок {lessonNumber}</span>
            </div>
            <div className={'student-success-card__theme'}>
                <span>{theme}</span>
            </div>
        </div>
    );
};

export default Title;