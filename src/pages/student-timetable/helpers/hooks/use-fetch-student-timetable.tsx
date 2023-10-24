import React, {useEffect, useState} from "react"
import {nanoid} from "nanoid"


import {Content} from "../../../../feature/timetable-month"
import {TimetableStore} from "../../../../local-store/timetable/timtetable-store"
import CalendarLesson from "../../../../feature/calendar-lesson"
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {baseUrl} from "../../../../shared/api/base-url";
import axios, {AxiosError} from "axios";
import {scheduleAdapter} from "../../../timetable/helpers/adapter/schedule.adapter";
import {ErrorStore} from "../../../../local-store/error-store";
import {stScheduleAdapter} from "../adapter/st-adapter";
import {useQuery} from "react-query";


type Timetable = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchStudentTimetable = (timetable: TimetableStore, cookieStore: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const query = useQuery('student-timetable', async ():Promise<Timetable> => {
        if (!cookieStore?.token) return

        loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)

        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
            headers: {
                Authorization: `Token ${cookieStore.token}`
            }
        })

        const adapted = await stScheduleAdapter(data, cookieStore.token)

        return {
            dates: adapted.dates,
            content: adapted.schedule
        }

    }, {
        onSuccess: () => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
        },
        onError: (e) => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)

            const err = e as Error
            error.addError({
                id: nanoid(),
                title: err['code'],
                description: err.message
            })
        }
    })

    useEffect(() => {
        return () => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
        }
    }, [])

    return query.data
}