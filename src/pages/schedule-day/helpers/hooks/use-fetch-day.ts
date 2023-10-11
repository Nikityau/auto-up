import axios from "axios";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {DayScheduleStore} from "../../store/day-schedule-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../../../timetable/helpers/adapter/schedule.adapter";
import {scheduleDayAdapter} from "../adapter/schedule-day.adapter";
import {usersAdapter} from "../adapter/users.adapter";

export const useFetchDay = (cookie: CookieStore, daySchedule: DayScheduleStore, loader: LoaderStore) => {
    const {date} = useParams()

    useEffect(() => {
        (async () => {
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
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/`)
        })()
    }, [])


    const updStudentAtt = async (status, studentId) => {
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
    }

    return updStudentAtt
}