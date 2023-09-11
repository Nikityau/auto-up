import { nanoid } from "nanoid"

interface NavLink {
    id: string,
    link: string,
    text: string,
}

export const lecturerLinks: NavLink[] = [
    {
        id: nanoid(),
        text: 'Расписание',
        link: ''
    },
    {
        id: nanoid(),
        text: 'Группы',
        link: 'groups'
    },
    {
        id: nanoid(),
        text: 'База Знаний',
        link: 'db'
    }
]

export const studentLinks: NavLink[] = [
    {
        id: nanoid(),
        text: 'главная',
        link: ''
    },
    {
        id: nanoid(),
        text: 'достижения',
        link: ''
    },
    {
        id: nanoid(),
        text: 'расписание',
        link: ''
    },
    {
        id: nanoid(),
        text: 'мой класс',
        link: ''
    },
    {
        id: nanoid(),
        text: 'мои дипломы',
        link: ''
    },
]