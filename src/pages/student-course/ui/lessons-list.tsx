import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import Lesson from "./lesson";
import { CourseContext } from '../provider/course-provider';

type Props = {
}

const LessonsList = ({}: Props) => {

    const {lessons, currentLesson, onSetLesson} = useContext(CourseContext)

    return (
        <div className={'lessons-list'}>
            {
                lessons &&
                lessons.map((l, i) => (
                    <Lesson
                        key={l.id}
                        number={i + 1}
                        classNames={[
                            currentLesson?.id == l.id &&
                            'lesson_current'
                        ]}
                        onClick={() => onSetLesson(l)}
                    />
                ))
            }
        </div>
    );
};

export default LessonsList;