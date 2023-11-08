import {useEffect, useState} from "react";
import {ILesson} from "../../store/lessons";
import {courseEM} from "../../store/course-em";

export const useLessons = () => {
    const [lesson, setLesson] = useState<ILesson>(null)
    const [lessons, setLessons] = useState<ILesson[]>(null)

    useEffect(() => {
        const unsubLessons = courseEM.on('lessons', (data: ILesson[]) => {
            setLessons(data)
        })
        const unsubLesson = courseEM.on('lesson', (data: ILesson) => {
            setLesson(data)
            courseEM.emit('fetch-tasks')
        })

        return () => {
            unsubLessons()
            unsubLesson()
        }
    }, [])

    const onSetLesson = (data: ILesson) => {
        courseEM.emit('set-lesson', data)
    }

    return {
        lesson,
        lessons,
        onSetLesson
    }
}