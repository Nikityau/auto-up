import {StudentBaseInfo} from "./interface/student-base-info.interface";
import {nanoid} from "nanoid";
import {StudentAttendance} from "./interface/student-attendance.interface";
import {StudentLesson} from "./interface/student-lesson.interface";
import {TasksBlock} from "../../../shared/data/interface/tasks-block.interface";

export const studentBaseInfo: StudentBaseInfo = {
    id: nanoid(),
    avatar: null,
    group: 'python 1',
    name: 'Max',
    surname: 'Mad'
}

const d = new Date()

export const studentAttendance: StudentAttendance = {
    id: nanoid(),
    course: 'python start',
    lessons_count: 16,
    attendance: [
        {
            id: nanoid(),
            theme: 'Python 1 - introduce',
            date: d,
            was: true,
        },
        {
            id: nanoid(),
            theme: 'Python 2 - variables',
            date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1),
            was: false,
        },
    ]
}

const tasks: TasksBlock[] = [
    {
        id: nanoid(),
        title: 'first',
        subtitle: null,
        tasks: [
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
                isSpec: true
            },
        ]
    },
    {
        id: nanoid(),
        title: 'first',
        subtitle: null,
        tasks: [
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
                isSpec: true
            },
        ]
    },
    {
        id: nanoid(),
        title: 'first',
        subtitle: null,
        tasks: [
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'not_right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'right',
            },
            {
                id: nanoid(),
                number: 1,
                type: 'not_solve',
                isSpec: true
            },
        ]
    },
]

export const studentLessons: StudentLesson[] = [
    {
        id: nanoid(),
        lesson_number: 1,
        theme: 'Theme',
        was: true,
        lesson_was: true,
        tasks,
    },
    {
        id: nanoid(),
        lesson_number: 1,
        theme: 'Theme',
        was: false,
        lesson_was: false,
        tasks,
    },
    {
        id: nanoid(),
        lesson_number: 1,
        theme: 'Theme',
        was: false,
        lesson_was: false,
        tasks,
    },
]