import React from 'react';
import {studentInfo} from '../data/student'

const StudentName = () => {
    return (
        <div className='student-info__mini-data'>
            <div className='student-info__name'>
                <span>{studentInfo.surname} {studentInfo.name}</span>
            </div>
            <div className='student-info__avatar'
                style={{
                    backgroundImage: `url(${studentInfo.avatar})`
                }}
            >
            </div>
        </div>
    );
};

export default StudentName;