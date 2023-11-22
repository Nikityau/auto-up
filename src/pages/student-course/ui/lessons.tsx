 import React from 'react';
import LessonsHeader from "./lessons-header";
import LessonsWrapper from "./lessons-wrapper";

const Lessons = () => {
    return (
        <div className={'student-course__lessons'}>
            <LessonsHeader/>
            <LessonsWrapper/>
        </div>
    );
};

export default Lessons;