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


type Timetable = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchStudentTimetable = (timetable: TimetableStore, cookieStore: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const [state, setState] = useState<Timetable>(null)

    useEffect(() => {
        if (!cookieStore?.token) return

        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)
                const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
                    headers: {
                        Authorization: `Token ${cookieStore.token}`
                    }
                })

                const adapted = await stScheduleAdapter(data, cookieStore.token)

                setState({
                    dates: adapted.dates,
                    content: adapted.schedule
                })
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
            }
        })()
    }, [cookieStore])

    /*useEffect(() => {
        const dates = [
          new Date()
        ]

        const content: Content[] = [
            {
                id: nanoid(),
                date: dates[0],
                content:
                    <CalendarLesson
                        id={nanoid()}
                        courseTitle={'python start'}
                        groupTitle={'Python 1'}
                        theme="Урок 01 - Введение в языки Pyhton"
                        startTime="19:00"
                        endTime="20:00"
                        type={'online'}
                        isCurrent={true}
                        lessonPerDay={10000}
                    />
            },
            {
                id: nanoid(),
                date: new Date(dates[0].getFullYear(), dates[0].getMonth(), dates[0].getDate() + 1),
                content:
                    <CalendarLesson
                        id={nanoid()}
                        courseTitle="python pro"
                        groupTitle="python 13"
                        theme="Урок 01 - Введение в языки Pyhton"
                        startTime="11:00"
                        endTime="15:00"
                        type="offline"
                        lessonPerDay={500}
                    />
            }
        ]

        setState({
            content: content,
            dates: dates
        })
    }, [])*/

    return state
}