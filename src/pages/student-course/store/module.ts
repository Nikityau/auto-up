import axios from "axios";

import {ICourse} from "./course";

import {baseUrl} from "../../../shared/api/base-url";
import {CourseEM, ICourseEMController} from "./course-em";

export interface IModule {
    id: string,
    title: string,
    number: number
}

export class Module implements ICourseEMController {
    module: IModule = null
    modules: IModule[] = null

    courseEM: CourseEM = null

    constructor(courseEm: CourseEM) {
        this.courseEM = courseEm
    }

    async fetch(course: ICourse) {
        const {data} =  await axios.get<IModule[]>(`${baseUrl}/api/v1/courses/${course.id}/modules/`)

        this.modules = data.sort((m1, m2) => m1.number - m2.number)

        this.courseEM.emit('modules', this.modules)
        this.set(this.modules[0])
    }

    set(module: IModule) {
        this.module = module

        this.courseEM.emit('module', this.module)
    }
}