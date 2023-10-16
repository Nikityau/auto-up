import {CourseTask} from "./course-task.interface";

export interface CourseLesson {
    id: string,
    title?:string,
    number: number
    tasks: CourseTask[]
}