import axios from "axios";
import {nanoid} from "nanoid";

import {ResSchedule} from "./interface/res-schedule";

import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import {baseUrl} from "../../../../shared/api/base-url";


export type LessonAdapted = {
    courseId: string,
    lessonId: string,
    groupId: string
} & Omit<CourseInterface, "isCurrent">


type Res = {
    schedule: Record<string, LessonAdapted[]>
}

export const scheduleAdapter = async (data: ResSchedule[]): Promise<Res> => {
    const schedule: Record<string, LessonAdapted[]> = {}

    const groupCache = {}

    for (let sch of data) {
        if (!(sch.group in groupCache)) {
            try {
                const resGroup = await axios.get(`${baseUrl}/api/v1/study_groups/${sch.group}`)

                groupCache[sch.group] = resGroup.data
            } catch (e) {
                groupCache[sch.group] = null
            }
        }

        const lessonDate = new Date(sch.start_time)
        const dateSpecFormat = `${lessonDate.getFullYear()}-${lessonDate.getMonth() + 1}-${lessonDate.getDate()}`

        const lesson = {
            id: nanoid(),
            courseId: sch.course.id,
            groupId: sch.group,
            lessonId: sch.lesson.id,
            courseTitle: sch.course.title,
            groupTitle: sch.group_name,
            lessonPerDay: null,
            theme: sch.lesson.title,
            endTime: new Date(new Date(sch.start_time).getTime() + sch.duration_minutes * 60 * 1000).toLocaleTimeString().slice(0, 5),
            startTime: new Date(sch.start_time).toLocaleTimeString().slice(0, 5),
            date: new Date(sch.start_time),
            type: groupCache[sch.group]['lesson_format']
        }

        if (dateSpecFormat in schedule) {
            schedule[dateSpecFormat].push(lesson)
        } else {
            schedule[dateSpecFormat] = [
                lesson
            ]
        }
    }

    return {
        schedule,
    }
};