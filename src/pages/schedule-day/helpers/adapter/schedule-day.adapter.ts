import axios from "axios";
import { nanoid } from "nanoid";

import { StudentSchedule } from "../../../../shared/data/interface/student-schedule.interface";
import { baseUrl } from "../../../../shared/api/base-url";
import { ResLesson } from "../interface/res";
import { LessonAdapted } from "../../../../pages/timetable-page/helpers/adapter/schedule.adapter";


export const scheduleDayAdapter = async (lessons: LessonAdapted[]): Promise<StudentSchedule[]> => {
  const schedule: StudentSchedule[] = []

  for(let lesson of lessons) {
    const ls:StudentSchedule = {
      id: lesson.lessonId,
      courseId: lesson.courseId,
      lessonId: lesson.lessonId,
      groupId: lesson.groupId,
      addonFiles: null,
      tasks: [],
      students: [],
      date: lesson.date,
      groupTitle: lesson.groupTitle,
      courseTitle: lesson.courseTitle,
      lessonTitle: lesson.theme,
      timeEnd: lesson.endTime,
      timeStart: lesson.startTime
    }

    const lessonRes = await axios.get(`${baseUrl}/api/v1/courses/${lesson.courseId}/lessons/${lesson.lessonId}/`)
    const lessonData: ResLesson = lessonRes.data as ResLesson

    ls.addonFiles = {
      id: nanoid(),
      manual: lessonData.manual,
      presentation: lessonData.presentation
    }

    const taskBlocks = []

    for(let taskBlock of lessonData.task_blocks) {
      const tbResData = {}

      const taskBlockRes = await axios.get(`${baseUrl}/api/v1/courses/${ls.courseId}/lessons/${ls.lessonId}/tasks/?task_block=${taskBlock.id}`)

      tbResData['id'] = taskBlock.id
      tbResData['title'] = taskBlock.name
      tbResData['tasks'] = taskBlockRes.data

      taskBlocks.push(tbResData)
    }
    ls.tasks = taskBlocks

    schedule.push(ls)
  }

  return schedule
}