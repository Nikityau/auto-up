import React from 'react';

import CourseModules from "../../enteties/course-modules";
import Lessons from "./ui/lessons";
import {courseStore} from "./store/course-store";
import CourseProvider from "./provider/course-provider";

import './style/index.scss'

const StudentCourse = () => {
    return (
        <CourseProvider courseStore={courseStore}>
            <div className={'student-course'}>
                <div className={'student-course__container app-container'}>
                    <CourseModules
                        course={courseStore}
                    />
                    <Lessons/>
                </div>
            </div>
        </CourseProvider>
    );
};

export default StudentCourse;