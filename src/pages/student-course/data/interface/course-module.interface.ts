import {CourseLesson} from "./course-lesson.interface";

export interface CourseModule {
    id: string,
    title: string,
    number: number
    lessons: CourseLesson[]
}