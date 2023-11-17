import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { DayScheduleStore } from "../../store/day-schedule-store";

import { baseUrl } from "../../../../shared/api/base-url";
import { scheduleDayAdapter } from "../adapter/schedule-day.adapter";
import { usersAdapter } from "../adapter/users.adapter";
import { scheduleAdapter } from "../../../timetable-page/helpers/adapter/schedule.adapter";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export const useFetchDay = (daySchedule: DayScheduleStore) => {
    const { date } = useParams()
    const errHandler = useErrorHandler()
    const {on, off} = useLoader()

    useQuery('student-lessons', async () => {
        on()
        const resLesson = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/?date=${date}`)

        const adaptedLesson = await scheduleAdapter(resLesson.data)
        const scheduleAdapted = await scheduleDayAdapter(adaptedLesson.schedule)
        const schWithSt = await usersAdapter(scheduleAdapted)

        daySchedule.setSchedule(schWithSt)
    }, {
        onSuccess: () => {
            off()
        },
        onError: (e) => {
            errHandler(e)
            off()
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
            errHandler(e)

            daySchedule.setStudentStatus(studentId, !status)
        }
    }

    return updStudentAtt
}