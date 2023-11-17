import {useEffect, useState} from "react";
import {ILesson} from "../../store/lessons";
import {courseEM} from "../../store/course-em";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export const useLessons = () => {
    const [lesson, setLesson] = useState<ILesson>(null)
    const [lessons, setLessons] = useState<ILesson[]>(null)
    const {on, off} = useLoader()

    useEffect(() => {
        const unsubLessons = courseEM.on('lessons', (data: ILesson[]) => {
            setLessons(data)
        })
        const unsubLesson = courseEM.on('lesson', (data: ILesson) => {
            setLesson(data)
            courseEM.emit('fetch-tasks')
            on()
        })
        const unsubTasks = courseEM.on('tasks', () => {
            off()
        })

        return () => {
            unsubLessons()
            unsubLesson()
            unsubTasks()
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