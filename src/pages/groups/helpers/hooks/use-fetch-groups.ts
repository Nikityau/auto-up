import { useState } from "react"
import { useFetch } from "../../../../shared/helpers/hooks/use-fetch"
import { nanoid } from "nanoid"


interface GroupData {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: string[],
    status: string
}

const groupsData: GroupData[] = [
    {
        id: nanoid(),
        groupTitle: 'Python 1',
        courseTitle: 'python start',
        students: [
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        status: 'Урок 02 - Введение в языки Pyhton'
    },
    {
        id: nanoid(),
        groupTitle: 'Python 2',
        courseTitle: 'python pro',
        students: [
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        status: 'Урок 02 - Введение в языки Pyhton'
    }
] 

export const useFecthGroups = () => {
    const [groups, setGroups] = useState<GroupData[]>(() => groupsData)

    const onResponse = (data: any) => {
        
    }

    useFetch({
        url:'https://jsonplaceholder.typicode.com/comments',
        onResponse: onResponse,
        onError: () => {

        }
    })

   

    return groups
}