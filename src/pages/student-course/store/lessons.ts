import {baseUrl} from "../../../shared/api/base-url";
import axios from "axios";
import {ICourse} from "./course";
import {IModule} from "./module";
import {CourseEM, ICourseEMController} from "./course-em";

export interface ILesson {
    id: string,
    number: number,
    presentation: string,
    theme: string
}

interface ILessonRes {
    id: string,
    title: string,
    lessons: {
        id: string
        number: number,
        presentation: string,
        title: string,
        task_blocks: {
            id: string,
            tasks_amount: number,
            name: string
        }[]
    }[]
}

export class Lessons implements  ICourseEMController {
    lesson: ILesson = null
    lessons: ILesson[] = null

    courseEM: CourseEM = null

    constructor(courseEm: CourseEM) {
        this.courseEM = courseEm
    }

    async fetch({course, module} : {course: ICourse, module: IModule }) {
        const {data} = await axios.get<ILessonRes>(`${baseUrl}/api/v1/courses/${course.id}/modules/${module.id}/`)

        this.lessons = data.lessons.map(l => {
            const lesson: ILesson = {
                id: l.id,
                number: l.number,
                presentation: l.presentation,
                theme: l.title
            }
            return lesson
        }).sort((l1, l2) => l1.number - l2.number)

        this.courseEM.emit('lessons', this.lessons)

        this.set(this.lessons[0])
    }


    set(lesson: ILesson) {
        this.lesson = lesson
        this.courseEM.emit('lesson', this.lesson)
    }
}