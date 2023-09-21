import { nanoid } from "nanoid"

interface Attendence {
    id: string,
    date: Date,
    was: boolean,
    lessonTitle: string
}

interface StudentInfo {
    name: string,
    surname: string,
    avatar: string,
}

const d = new Date()

export const studentInfo: StudentInfo = {
    name: 'Mad Max',
    surname: 'Вольфшлегельштайнхаузенбергедорф-старший',
    avatar: '',
}

interface StAttStatus {
    group: string,
    course: string
    lessons: number,
    attendence: Attendence[]
}

export const stAttStatus: StAttStatus = {
    course: 'python start',
    group: 'python 1',
    lessons: 16,
    attendence: [
        {
            id: nanoid(),
            date: new Date(),
            lessonTitle: 'Урок 01 - Введение в языки Pyhton',
            was: false
        },
        {
            id: nanoid(),
            date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 3),
            lessonTitle: 'Урок 01 - Введение в языки Pyhton',
            was: true
        },
    ]
}