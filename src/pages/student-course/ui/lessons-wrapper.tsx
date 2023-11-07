import React from 'react';
import LessonsList from "./lessons-list";
import TasksList from "./tasks-list";

const LessonsWrapper = () => {
    return (
        <div className={'student-course__lessons-wrapper'}>
            <LessonsList />
            <TasksList />
        </div>
    );
};

export default LessonsWrapper;