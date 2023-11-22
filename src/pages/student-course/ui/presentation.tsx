import React from 'react';
import {useLessons} from "../helpers/hooks/use-lessons";

const Presentation = () => {

    const {lesson} = useLessons()

    if(!lesson) return

    return (
        <div className={'lesson-presentation'}>
            <a href={lesson.presentation}>
                Презентация: {lesson.theme}
            </a>
        </div>
    );
};

export default Presentation;