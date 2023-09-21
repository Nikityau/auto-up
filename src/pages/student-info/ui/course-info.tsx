import React from 'react';
import { stAttStatus } from '../data/student';

const CourseInfo = () => {
    return (
        <div className='course-info'>
            <p>{stAttStatus.group}</p>
            <p>Курс: 
                <span>
                    {stAttStatus.course}
                </span>
            </p>
        </div>
    );
};

export default CourseInfo;