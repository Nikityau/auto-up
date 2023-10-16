import React, {useContext} from 'react';
import {studentBaseInfo} from "../data/student-info";
import {StudentInfoContext} from "../provider";

const StudentName = () => {

    const {user} = useContext(StudentInfoContext)

    if(!user) {
        return null
    }

    return (
        <div className='student-info__mini-data'>
            <div className='student-info__name'>
                <span>{user?.last_name} {user?.first_name}</span>
            </div>
        </div>
    );
};

export default StudentName;