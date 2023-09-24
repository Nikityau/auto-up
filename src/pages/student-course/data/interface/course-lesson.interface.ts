import {CourseTask} from "./course-task.interface";

export interface CourseLesson {
    id: string,
    title?:string
    tasks: CourseTask[]
}