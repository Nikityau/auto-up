import React from 'react';
import {studentBaseInfo} from "../data/student-info";

const StudentName = () => {
    return (
        <div className='student-info__mini-data'>
            <div className='student-info__name'>
                <span>{studentBaseInfo.surname} {studentBaseInfo.name}</span>
            </div>
            <div className='student-info__avatar'
                style={{
                    backgroundImage: `url(${studentBaseInfo.avatar})`
                }}
            >
            </div>
        </div>
    );
};

export default StudentName;