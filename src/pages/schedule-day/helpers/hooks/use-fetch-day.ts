import axios, {AxiosError} from "axios";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";

import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {DayScheduleStore} from "../../store/day-schedule-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../../../timetable/helpers/adapter/schedule.adapter";
import {scheduleDayAdapter} from "../adapter/schedule-day.adapter";
import {usersAdapter} from "../adapter/users.adapter";
import {ErrorStore} from "../../../../local-store/error-store";

export const useFetchDay = (cookie: CookieStore, daySchedule: DayScheduleStore, loader: LoaderStore, error: ErrorStore) => {
    const {date} = useParams()

    useQuery('student-lessons', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)
        const resLesson = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/?date=${date}`, {
            headers: {
                Authorization: `Token ${cookie.token}`
            }
        })

        const adaptedLesson = await scheduleAdapter(resLesson.data, cookie.token)
        const scheduleAdapted = await scheduleDayAdapter(adaptedLesson.schedule, cookie.token)
        const schWithSt = await usersAdapter(scheduleAdapted, cookie.token)

        daySchedule.setSchedule(schWithSt)
    }, {
        onSuccess: () => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
        },
        onError: (e) => {
            const err = e as Error
            error.addError({
                id: nanoid(),
                title: err['code'],
                description: err.message
            })

            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
        }
    })

    const updStudentAtt = async (status, studentId) => {
        try {
            daySchedule.setStudentStatus(studentId, status)

            await axios.patch(`${baseUrl}/api/v1/study_groups/${daySchedule.currentSchedule.groupId}/attend_status/update_attend/`, {
                student: studentId,
                is_attend: status,
                lesson: daySchedule.currentSchedule.lessonId
            }, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })
        } catch (e) {
            const err = e as AxiosError
            error.addError({
                id: nanoid(),
                title: err['code'],
                description: err.message + '\n' + err.config.url
            })

            daySchedule.setStudentStatus(studentId, !status)
        }
    }

    return updStudentAtt
}