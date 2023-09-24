import {nanoid} from "nanoid";
import {StudentSchedule} from "./interface/student-schedule.interface";

export const studentSchedule: StudentSchedule[] = [
    {
        id: nanoid(),
        date: new Date(),
        groupTitle: 'Python 2',
        courseTitle: 'python pro',
        lessonTitle: 'Урок 01 - Переменные',
        timeStart: '13:00',
        timeEnd: '14:00',
        addonFiles: [
            {
                id: nanoid(),
                title: 'Презентация',
                url: 'https://google.com'
            },
            {
                id: nanoid(),
                title: 'Методические указания',
                url: 'https://google.com'
            },
        ],
        tasks: [
            {
                id: nanoid(),
                title: 'Первые программы',
                subtitle: 'Б-01',
                tasks: [
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                ]
            },
            {
                id: nanoid(),
                title: 'Вывод данных',
                subtitle: 'Б-02',
                tasks: [
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                ]
            },
        ],
        students: [
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
        ]
    },
    {
        id: nanoid(),
        date: new Date(),
        groupTitle: 'Python 22',
        courseTitle: 'python pro',
        lessonTitle: 'Урок 01 - Переменные',
        timeStart: '13:00',
        timeEnd: '14:00',
        addonFiles: [
            {
                id: nanoid(),
                title: 'Презентация',
                url: 'https://google.com'
            },
            {
                id: nanoid(),
                title: 'Методические указания',
                url: 'https://google.com'
            },
        ],
        tasks: [
            {
                id: nanoid(),
                title: 'Первые программы',
                subtitle: 'Б-01',
                tasks: [
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                ]
            },
            {
                id: nanoid(),
                title: 'Вывод данных',
                subtitle: 'Б-02',
                tasks: [
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                ]
            },
            {
                id: nanoid(),
                title: 'Вывод данных',
                subtitle: 'Б-02',
                tasks: [
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                    },
                    {
                        id: nanoid(),
                        type: 'empty',
                        isSpec: true
                    },
                ]
            },
        ],
        students: [
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Maxxxxx',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
            {
                id: nanoid(),
                avatar: '',
                isIn: null,
                name: 'Max',
                surname: 'Mad'
            },
        ]
    },
]