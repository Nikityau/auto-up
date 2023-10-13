import React from 'react';

import CourseModules from "../../enteties/course-modules";
import Lessons from "./ui/lessons";
import {courseStore} from "./store/course-store";
import CourseProvider from "./provider/course-provider";

import './style/index.scss'
import {errorStore} from "../../local-store/error-store";
import {loaderStore} from "../../local-store/loader/loader-store";
import {cookieStore} from "../../local-store/cookie/cookie-store";

const StudentCourse = () => {
    return (
        <CourseProvider courseStore={courseStore} error={errorStore} loader={loaderStore} cookie={cookieStore}>
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