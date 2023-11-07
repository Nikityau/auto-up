import { useEffect, useState } from "react"
import { ICourse, courseStore } from "../../store/course"

export const useCourseInfo = () => {
    const [course, setCourse] = useState<ICourse>(null)
    
    useEffect(() => {
        courseStore.subscribe(onSetCourses)

        courseStore.fetch()
    }, [])

    const onSetCourses = (data: ICourse) => {
        setCourse(data)
    }

    return {
        course
    }
}