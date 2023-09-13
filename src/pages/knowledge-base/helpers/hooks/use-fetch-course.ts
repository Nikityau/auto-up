import { nanoid } from "nanoid"
import { useState } from "react"

import p1_img from '../../assets/p1.png'
import p2_img from '../../assets/p2.png'

interface Course {
    id: string,
    title: string,
    preview: string,
}

const courseList: Course[] = [
    {
        id: nanoid(),
        title: 'python start',
        preview: p1_img
    },
    {
        id: nanoid(),
        title: 'python pro',
        preview: p2_img
    }
]

export const useFetchCourses = () => {
    const [courses, setCourses] = useState<Course[]>(() => courseList)


    return courses
}