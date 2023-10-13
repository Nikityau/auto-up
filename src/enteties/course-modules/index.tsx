import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../../pages/student-course/store/course-store";
import CourseTitle from "./ui/course-title";
import Modules from "./ui/modules";

import './style/index.scss'
import courseImg from './assets/course-icon.png'


type Props = {
    course: CourseStore
}

const CourseModules = observer(({course}: Props) => {
    return (
        <div className={'course-modules'}>
            <div className={'course-modules__container'}>
                <CourseTitle title={course.currentCourse?.title}/>
                <Modules course={course}/>
                <div className={'course-icon'}>
                    <img src={courseImg} alt={'course-icon'}/>
                </div>
            </div>
        </div>
    );
});

export default CourseModules;