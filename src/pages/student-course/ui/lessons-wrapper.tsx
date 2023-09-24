import React from 'react';
import LessonsList from "./lessons-list";
import TasksList from "./tasks-list";

import {courseStore} from "../store/course-store";

const LessonsWrapper = () => {
    return (
        <div className={'student-course__lessons-wrapper'}>
            <LessonsList course={courseStore}/>
            <TasksList course={courseStore}/>
        </div>
    );
};

export default LessonsWrapper;