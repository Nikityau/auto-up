import { useEffect, useState } from "react";
import axios, {AxiosError} from "axios";
import { nanoid } from "nanoid"
import {useQuery} from "react-query";

import { loaderStore, LoaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";
import {ErrorStore} from "../../../../local-store/error-store";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";


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

export const useFetchGroups = (loader: LoaderStore, cookie: CookieStore, error: ErrorStore) => {
    const errHandler = useErrorHandler()

    const query = useQuery('groups-query', async () => {
        loaderStore.add(`${baseUrl}/api/v1/study_groups/`)

        const grps: GroupData[] = []
        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
            headers: {
                Authorization: `Token ${cookie.token}`
            }
        })

        for(let group of data as ResGroup[]) {
            const sttatRes = await axios.get(`${baseUrl}/api/v1/study_groups/${group.id}/statistics/`)

            const statData = sttatRes.data as StatGroupRes

            const courseRes = await axios.get(`${baseUrl}/api/v1/courses/${group.course}/`)

            grps.push({
                id: group.id,
                groupTitle: group.name,
                courseTitle: courseRes.data['title'],
                status: statData.previous_lesson ? statData.previous_lesson?.lesson?.title : statData.next_lesson?.lesson?.title,
                students: group.students
            })
        }


        return grps
    }, {
        onSuccess: () => {
            loaderStore.remove(`${baseUrl}/api/v1/study_groups/`)
        },
        onError: (e) => {
            errHandler(e)
           
            loaderStore.remove(`${baseUrl}/api/v1/study_groups/`)
        }
    })

    useEffect(() => {
        return () => {
            loaderStore.remove(`${baseUrl}/api/v1/study_groups/`)
        }
    }, [])

    return query.data
}