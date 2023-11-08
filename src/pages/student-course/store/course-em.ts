import {Subject} from "rxjs";

import {FType} from "../../../shared/helpers/types/f-types";
import {Course} from "./course";
import {Module} from "./module";
import {Lessons} from "./lessons";
import {Task} from "./task";

type CourseControllersEvents =
    'fetch-course' |
    'fetch-modules' |
    'fetch-lessons' |
    'fetch-tasks' |
    'set-module' |
    'set-lesson'

type CourseSubEvents =
    'course' |
    'modules' |
    'module' |
    'lessons' |
    'lesson' |
    'tasks'

type CourseEMEvents = CourseControllersEvents & CourseSubEvents


export interface ICourseEMController {
    courseEM: CourseEM

    fetch(...data: any[]): void

    set(data?: any): void
}

export class CourseEM {
    private eventsControllers: Map<CourseControllersEvents, ICourseEMController>
    private subs: Map<CourseSubEvents, Subject<any>>

    private middlewares: Map<CourseControllersEvents, FType<any, any>[]>

    constructor() {
        this.eventsControllers = new Map<CourseControllersEvents, ICourseEMController>()
        this.subs = new Map<CourseSubEvents, Subject<any>>()
        this.middlewares = new Map<CourseControllersEvents, FType<any, any>[]>()

        const course = new Course(this)
        const module = new Module(this)
        const lesson = new Lessons(this)
        const task = new Task(this)

        this.eventsControllers.set('fetch-course', course)
        this.eventsControllers.set('fetch-modules', module)
        this.eventsControllers.set('fetch-lessons', lesson)
        this.eventsControllers.set('fetch-tasks', task)

        this.eventsControllers.set('set-module', module)
        this.eventsControllers.set('set-lesson', lesson)

        this.use('fetch-modules', () => {
            return course.course
        })
        this.use('fetch-lessons', () => {
            return {
                course:course.course,
                module:module.module
            }
        })
        this.use('fetch-tasks', () => {
            return {
                course:course.course,
                lesson: lesson.lesson
            }
        })
    }

    use(eventName: CourseControllersEvents, cb: FType<any, any>) {
        if(!this.middlewares.has(eventName)) {
            this.middlewares.set(eventName, [])
        }

        this.middlewares.get(eventName).push(cb)
    }

    on(eventName: CourseSubEvents, cb: FType<any, void>) {
        if (!this.subs.get(eventName)) {
            this.subs.set(eventName, new Subject<any>())
        }

        const sub = this.subs.get(eventName).subscribe({
            next: (value: any) => {
                cb(value)
            }
        })

        return () => {
            sub.unsubscribe()
        }
    }

    private middlewaresEmit(eventName: CourseControllersEvents, data?:any): any {
        if(!this.middlewares.has(eventName)) return data

        let resData = data

        for(let cb of this.middlewares.get(eventName)) {
            resData = cb(resData)
        }

        return resData
    }

    private controllerEvent(eventName: CourseControllersEvents, data?: any) {
        if (eventName.includes('set')) {
            this.eventsControllers.get(eventName).set(data)
        } else {
            const mData = this.middlewaresEmit(eventName, data)
            this.eventsControllers.get(eventName).fetch(mData)
        }
    }

    private subEvent(eventName: CourseSubEvents, data?: any) {
        if(!this.subs.has(eventName)) {
           return
        }

        this.subs.get(eventName).next(data)
    }

    private guardControllerEv(eventName: CourseEMEvents | string): eventName is CourseControllersEvents {
        return eventName.includes('set') || eventName.includes('fetch')
    }

    private guardSub(eventName: CourseEMEvents | string): eventName is CourseSubEvents {
        return true
    }

    emit(eventName: CourseEMEvents | string, data?: any) {
        if (this.guardControllerEv(eventName)) {
            this.controllerEvent(eventName, data)

            return
        }

        if (this.guardSub(eventName)) {
            return this.subEvent(eventName, data)
        }

    }
}

export const courseEM = new CourseEM()