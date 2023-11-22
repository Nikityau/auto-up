import React from 'react';
import LessonsList from "./lessons-list";
import TasksList from "./tasks-list";
import Presentation from "./presentation";

const LessonsWrapper = () => {
    return (
        <div className={'student-course__lessons-wrapper'}>
            <LessonsList />
            <Presentation/>
            <TasksList />
        </div>
    );
};

export default LessonsWrapper;