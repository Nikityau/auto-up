import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { DayScheduleStore } from "../../store/day-schedule-store";
import { LoaderStore } from "../../../../local-store/loader/loader-store";

import { baseUrl } from "../../../../shared/api/base-url";
import { scheduleDayAdapter } from "../adapter/schedule-day.adapter";
import { usersAdapter } from "../adapter/users.adapter";
import { scheduleAdapter } from "../../../../pages/timetable-page/helpers/adapter/schedule.adapter";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

export const useFetchDay = (daySchedule: DayScheduleStore, loader: LoaderStore) => {
    const { date } = useParams()
    const errHandler = useErrorHandler()

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
            errHandler(e)

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
            errHandler(e)

            daySchedule.setStudentStatus(studentId, !status)
        }
    }

    return updStudentAtt
}