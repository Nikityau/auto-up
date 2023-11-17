import {useEffect, useState} from "react";
import {courseEM} from "../../store/course-em";
import {ICourse} from "../../store/course";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export const useCourse = () => {
    const [course, setCourse] = useState<ICourse>(null)
    const {on, off} = useLoader()

    useEffect(() => {
        const unsub = courseEM.on('course', (course: ICourse) => {
            setCourse(course)
            courseEM.emit('fetch-modules')
            on()
        })
        const unsModule = courseEM.on('modules', () => {
            off()
        })

        return () => {
            unsub()
            unsModule()
        }
    }, [])


    return course
}