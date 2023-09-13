import React from 'react';

type Props = {
    groupTitle: string,
    courseTitle: string
}

const Title = ({ courseTitle, groupTitle }: Props) => {
    return (
        <div className='group-card__title'>
            <div className='group-card__group-title'>
                <span>{groupTitle}</span>
            </div>
            <div className='group-card__course-title'>
                <span>Курс:</span>
                <span> {courseTitle}</span>
            </div>
        </div>
    );
};

export default Title;