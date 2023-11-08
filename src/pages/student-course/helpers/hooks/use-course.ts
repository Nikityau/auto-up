import {useEffect, useState} from "react";
import {courseEM} from "../../store/course-em";
import {ICourse} from "../../store/course";

export const useCourse = () => {
    const [course, setCourse] = useState<ICourse>(null)

    useEffect(() => {
        const unsub = courseEM.on('course', (course: ICourse) => {
            setCourse(course)
            courseEM.emit('fetch-modules')
        })

        return () => {
            unsub()
        }
    }, [])


    return course
}