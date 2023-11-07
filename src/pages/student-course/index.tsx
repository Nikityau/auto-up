import React from 'react';

import CourseModules from "../../enteties/course-modules";
import Lessons from "./ui/lessons";
import {loaderStore} from "../../local-store/loader/loader-store";
import CourseProvider from "./provider/course-provider";
import ModuleWrapper from './ui/module-wrapper';

import './style/index.scss'

const StudentCourse = () => {
    return (
        <CourseProvider loader={loaderStore}>
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