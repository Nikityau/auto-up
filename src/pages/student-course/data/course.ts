import {nanoid} from "nanoid";
import {Course} from "./interface/course.interface";
import {CourseModule} from "./interface/course-module.interface";
import {CourseTask} from "./interface/course-task.interface";

import icon from '../assets/python.svg'
import {CourseLesson} from "./interface/course-lesson.interface";

const dtId = nanoid()
const algId = nanoid()

const lessonId = nanoid()

export const course: Course = {
    id: nanoid(),
    icon: icon,
    title: 'python',
    modules: [
        {
            id: dtId,
            title:  'data types',
            lessons: null
        },
        {
            id: algId,
            title:  'algorithms',
            lessons: null
        },
        {
            id: nanoid(),
            title:  'code organize',
            lessons: null
        },
        {
            id: nanoid(),
            title:  'data structure',
            lessons: null
        },
        {
            id: nanoid(),
            title:  'OOP',
            lessons: null
        },
    ]
}

export const tdModule: CourseModule =  {
    id: dtId,
    title:  'data types',
    lessons: [
        {
            id: lessonId,
            tasks: null
        },
        {
            id: nanoid(),
            tasks: null
        },
        {
            id: nanoid(),
            tasks: null
        },{

            id: nanoid(),
            tasks: null
        },
    ]
}

export const algModule: CourseModule = {
    id: algId,
    title:  'algorithms',
    lessons: [
        {
            id: nanoid(),
            tasks: null
        },
        {
            id: nanoid(),
            tasks: null
        },
    ]
}

export const tDTasks: CourseLesson = {
    id: lessonId,
    tasks: [
        {
            id: nanoid(),
            title: 'Example',
            description: [
                'first',
                'second',
                'third'
            ],
            icon: icon,
            tasksCount: 10,
            solvedTasks: 6
        },
        {
            id: nanoid(),
            title: 'Example',
            description: [
                'first',
                'second',
                'third'
            ],
            icon: icon,
            tasksCount: 10,
            solvedTasks: 6
        },
        {
            id: nanoid(),
            title: 'Example',
            description: [
                'first',
                'second',
                'third'
            ],
            icon: icon,
            tasksCount: 10,
            solvedTasks: 0
        },
    ]
}