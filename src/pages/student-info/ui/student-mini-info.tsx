import React from 'react';
import BackBtn from '../../../feature/back-btn';
import StudentName from './student-name';

const StudentMiniInfo = () => {
    return (
        <div className='student-info__mini'>
            <BackBtn/>
            <StudentName/>
        </div>
    );
};

export default StudentMiniInfo;