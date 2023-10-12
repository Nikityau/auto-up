import React, { useContext } from "react";
import { StudentInfoContext } from "../provider";

const CourseInfo = () => {

    const {user} = useContext(StudentInfoContext)

    return (
        <div className='course-info'>
            <p>{user?.groupName}</p>
            <p>Курс: 
                <span>
                    {user?.course}
                </span>
            </p>
        </div>
    );
};

export default CourseInfo;