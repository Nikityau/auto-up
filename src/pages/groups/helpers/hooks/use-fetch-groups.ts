import { useEffect, useState } from "react";
import axios, {AxiosError} from "axios";
import { nanoid } from "nanoid"
import { loaderStore, LoaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import {ErrorStore} from "../../../../local-store/error-store";


interface GroupData {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: any[],
    status: string
}

interface ResGroup {
    id: string,
    course: string,
    name: string,
    students: {
        id: string,
        first_name: string,
        last_name: string
    }[]
}

interface LessonRes {
    id: string,
    lesson: {
        id: string,
        title: string
    }
}

interface StatGroupRes {
    previous_lesson: LessonRes | null
    next_lesson: LessonRes
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

export const useFetchGroups = (loader: LoaderStore, cookie: CookieStore, error: ErrorStore) => {
    const [groups, setGroups] = useState<GroupData[]>(null)

    useEffect(() => {
        (async () => {
            try {
                loaderStore.add(`${baseUrl}/api/v1/study_groups/`)
                const grps: GroupData[] = []
                const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })

                for(let group of data as ResGroup[]) {
                    const sttatRes = await axios.get(`${baseUrl}/api/v1/study_groups/${group.id}/statistics/`, {
                        headers: {
                            Authorization: `Token ${cookie.token}`
                        }
                    })

                    const statData = sttatRes.data as StatGroupRes

                    const courseRes = await axios.get(`${baseUrl}/api/v1/courses/${group.course}/`, {
                        headers: {
                            Authorization: `Token ${cookie.token}`
                        }
                    })

                    grps.push({
                        id: group.id,
                        groupTitle: group.name,
                        courseTitle: courseRes.data['title'],
                        status: statData.previous_lesson ? statData.previous_lesson?.lesson?.title : statData.next_lesson?.lesson?.title,
                        students: group.students
                    })
                }
                setGroups(grps)
            } catch(e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loaderStore.remove(`${baseUrl}/api/v1/study_groups/`)
            }
        })()
    }, [])

   

    return groups
}