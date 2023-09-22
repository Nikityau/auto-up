import React from 'react';

type Props = {
    title: string
}

const CourseTitle = ({ title }: Props) => {
    return (
        <div className='module-list__course-title'>
            <span>{title}</span>
        </div>
    );
};

export default CourseTitle;