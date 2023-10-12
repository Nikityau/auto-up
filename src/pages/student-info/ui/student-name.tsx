import React, {useContext} from 'react';
import {studentBaseInfo} from "../data/student-info";
import {StudentInfoContext} from "../provider";

const StudentName = () => {

    const {user} = useContext(StudentInfoContext)

    return (
        <div className='student-info__mini-data'>
            <div className='student-info__name'>
                <span>{user?.last_name} {user?.first_name}</span>
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