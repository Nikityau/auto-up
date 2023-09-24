import React from 'react';

type Props = {
    title: string
}

const CourseTitle = ({title}:Props) => {
    return (
        <div className={'course-title'}>
            <span>Курс {title}</span>
        </div>
    );
};

export default CourseTitle;