import React from 'react';
import Lesson from "./lesson";
import {useLessons} from "../helpers/hooks/use-lessons";

type Props = {
}

const LessonsList = ({}: Props) => {
    const {lessons, lesson, onSetLesson} = useLessons()

    return (
        <div className={'lessons-list'}>
            {
                lessons &&
                lessons.map((l, i) => (
                    <Lesson
                        key={l.id}
                        classNames={[
                            lesson?.id == l.id &&
                            'lesson_current'
                        ]}
                        number={i + 1}
                        onClick={() => onSetLesson(l)}
                    />
                ))
            }
        </div>
    );
};

export default LessonsList;