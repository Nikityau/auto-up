import {action, computed, makeObservable, observable} from "mobx";

import {CourseModule} from "../data/interface/course-module.interface";
import {CourseLesson} from "../data/interface/course-lesson.interface";
import {CourseTask} from "../data/interface/course-task.interface";

import {algModule, course, tdModule, tDTasks} from "../data/course";
import {Course} from "../data/interface/course.interface";

export class CourseStore {
    currentCourse: Course = null
    currentModule: CourseModule = null
    currentLesson: CourseLesson = null

    modules: CourseModule[] = null
    lessons: CourseLesson[] = null
    tasks: CourseTask[] = null

    constructor() {
        makeObservable(this, {
            currentModule: observable,
            currentLesson: observable,
            modules: observable,
            lessons: observable,
            tasks: observable,
            setModule: action,
            setLesson: action,
            setLessons: action
        })

        this.currentCourse = course
        this.modules = course.modules
        this.currentModule = course.modules[0]
        this.currentLesson = tdModule.lessons[0]
        this.lessons = tdModule.lessons
        this.tasks = tDTasks.tasks
    }

    setModule(moduleId: string) {
        this.currentModule = this.modules.find(m => m.id == moduleId)
    }

    setLessons(lessons: CourseLesson[]) {
        this.lessons = lessons
        if(!this.lessons) {
            this.currentLesson = null

            return
        }

        this.currentLesson = lessons[0]
    }

    setLesson(lessonId: string) {
        if(!this.lessons) return

        this.currentLesson = this.lessons.find(l => l.id == lessonId)
    }

    setTasks(tasks: CourseTask[]) {
        this.tasks = tasks
    }
}

export const courseStore = new CourseStore()