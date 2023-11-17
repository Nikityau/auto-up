import React from 'react';

import Lessons from "./ui/lessons";
import CourseProvider from "./provider/course-provider";
import ModuleWrapper from './ui/module-wrapper';

import './style/index.scss'

const StudentCourse = () => {
    return (
        <CourseProvider >
            <div className={'student-course'}>
                <div className={'student-course__container app-container'}>
                    <ModuleWrapper/>
                    <Lessons/>
                </div>
            </div>
        </CourseProvider>
    );
};

export default StudentCourse;