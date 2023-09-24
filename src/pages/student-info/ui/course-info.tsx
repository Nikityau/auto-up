import React from 'react';
import {studentAttendance, studentBaseInfo} from "../data/student-info";

const CourseInfo = () => {
    return (
        <div className='course-info'>
            <p>{studentBaseInfo.group}</p>
            <p>Курс: 
                <span>
                    {studentAttendance.course}
                </span>
            </p>
        </div>
    );
};

export default CourseInfo;