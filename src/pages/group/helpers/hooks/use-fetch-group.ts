import { nanoid } from "nanoid"
import { useState } from "react"


export interface Student {
    id: string,
    avatar: string,
    login: string,
    password: string,
    name: string,
    surname: string,
    patronymic?: string,
    status: 'active' | 'disable',
    attendance: number,
    enrolled: Date
}

export interface Group {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: Student[]
}


export const useFetchGroup = () => {
    const [group, setGroup] = useState<Group>(() => {
        const group: Group = {
            id: nanoid(),
            courseTitle: 'python start',
            groupTitle: 'Python 1',
            students: (() => {
                return Array.from({length: 12}, () => {
                    return {
                        id: nanoid(),
                        login: 'Veresovoi',
                        password: '9665',
                        avatar: '',
                        name: 'Вересовой',
                        surname: 'Максим',
                        status: 'active',
                        attendance: 82,
                        enrolled: new Date()        
                    } as Student
                })
            })()
        }

        return group
    })

    return group
}