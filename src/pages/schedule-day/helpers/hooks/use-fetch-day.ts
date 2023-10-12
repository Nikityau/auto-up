import axios, {AxiosError} from "axios";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {DayScheduleStore} from "../../store/day-schedule-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../../../timetable/helpers/adapter/schedule.adapter";
import {scheduleDayAdapter} from "../adapter/schedule-day.adapter";
import {usersAdapter} from "../adapter/users.adapter";
import {ErrorStore} from "../../../../local-store/error-store";
import {nanoid} from "nanoid";

export const useFetchDay = (cookie: CookieStore, daySchedule: DayScheduleStore, loader: LoaderStore, error: ErrorStore) => {
    const {date} = useParams()

    useEffect(() => {
        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/study_groups/schedule/`)
                const resLesson = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/?date=${date}`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })


                console.log('res less', resLesson.data);

                const adaptedLesson = await scheduleAdapter(resLesson.data, cookie.token)
                const scheduleAdapted = await scheduleDayAdapter(adaptedLesson.schedule, cookie.token)
                const schWithSt = await usersAdapter(scheduleAdapted, cookie.token)
                console.log('adapted', scheduleAdapted);
                daySchedule.setSchedule(scheduleAdapted)
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
    }, [])


    const updStudentAtt = async (status, studentId) => {
        try {
            const stRes = await axios.patch(`${baseUrl}/api/v1/study_groups/${daySchedule.currentSchedule.groupId}/attend_status/update_attend/`, {
                student: studentId,
                is_attend: status,
                lesson: daySchedule.currentSchedule.lessonId
            }, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })

            console.log(stRes.data)

            daySchedule.setStudentStatus(studentId, status)
        } catch (e) {
            const err = e as AxiosError
            error.addError({
                id: nanoid(),
                title: err['code'],
                description: err.message + '\n' + err.config.url
            })
        }
    }

    return updStudentAtt
}