import {CourseModule} from "./course-module.interface";

export interface Course {
    id: string,
    title: string,
    icon: string,
    modules: CourseModule[]
}