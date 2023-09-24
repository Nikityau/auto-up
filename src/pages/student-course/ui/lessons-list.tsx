import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../store/course-store";
import Lesson from "./lesson";

type Props = {
    course: CourseStore
}

const LessonsList = observer(({course}: Props) => {
    return (
        <div className={'lessons-list'}>
            {
                !course.lessons
                    ? "null"
                    :
               course.lessons.map((l, i) => (
                   <Lesson
                    key={l.id}
                    number={i + 1}
                    classNames={[
                        course.currentLesson.id == l.id &&
                            'lesson_current'
                    ]}
                    onClick={() => {
                        course.setLesson(l.id)
                    }}
                   />
               ))
            }
        </div>
    );
});

export default LessonsList;