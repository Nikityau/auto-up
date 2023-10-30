import axios, {AxiosError} from "axios";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";

import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {DayScheduleStore} from "../../store/day-schedule-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleDayAdapter} from "../adapter/schedule-day.adapter";
import {usersAdapter} from "../adapter/users.adapter";
import {ErrorStore} from "../../../../local-store/error-store";
import { scheduleAdapter } from "../../../../pages/timetable-page/helpers/adapter/schedule.adapter";

export const useFetchDay = (daySchedule: DayScheduleStore, loader: LoaderStore, error: ErrorStore) => {
    const {date} = useParams()

    useQuery('student-lessons', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)
        const resLesson = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/?date=${date}`)

        const adaptedLesson = await scheduleAdapter(resLesson.data)
        const scheduleAdapted = await scheduleDayAdapter(adaptedLesson.schedule)
        const schWithSt = await usersAdapter(scheduleAdapted)

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