import axios from "axios";

import {baseUrl} from "../../../shared/api/base-url";
import {CourseEM, ICourseEMController} from "./course-em";

export interface ICourse {
    id: string,
    title: string
}


export class Course implements ICourseEMController {
    course: ICourse = null
    courseEM: CourseEM = null

    constructor(courseEM: CourseEM) {
        this.courseEM = courseEM
    }

    async fetch() {
        const courseRes = await axios.get(`${baseUrl}/api/v1/courses/`)
        this.course = (courseRes.data as ICourse[])[0]
        if(!this.courseEM) return

        this.courseEM.emit("course", this.course)
    }

    set(data?: any) {
        return
    }
}




