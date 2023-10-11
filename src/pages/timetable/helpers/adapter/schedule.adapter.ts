import { nanoid } from "nanoid";

import { ResSchedule } from "./interface/res-schedule";

import { CourseInterface } from "../../../../shared/helpers/types/course.interface";
import { datesCompare } from "../../../../shared/helpers/dates/dates-compare";


export type LessonAdapted = {
  courseId: string,
  lessonId: string,
  groupId: string
} & Omit<CourseInterface, "isCurrent">


type Res = {
  schedule: LessonAdapted[],
  dates: Date[]
}

export const scheduleAdapter = async (data: ResSchedule[]): Promise<Res> => {
  const schedule: LessonAdapted[] = [];
  const dates: Date[] = [];

  for (let sch of data) {
    schedule.push({
      id: nanoid(),
      courseId: sch.id,
      groupId: sch.group,
      lessonId: sch.lesson.id,
      courseTitle: sch.course.title,
      groupTitle: sch.group_name,
      lessonPerDay: 1,
      theme: sch.lesson.title,
      endTime: new Date(new Date(sch.start_time).getTime() + sch.duration_minutes * 60 * 1000).toLocaleTimeString().slice(0,5),
      startTime: new Date(sch.start_time).toLocaleTimeString().slice(0,5),
      date: new Date(sch.start_time),
      type: "offline"
    });

    if (dates.length == 0) {
      dates.push(new Date(sch.start_time));
    } else {
      const d = dates.find(d => datesCompare(d, new Date(sch.start_time)));

      if (!d) {
        dates.push(new Date(sch.start_time));
      } else {
        for(let i = 0; i < schedule.length; ++i) {
          if(datesCompare(new Date(sch.start_time), schedule[i].date)) {
            schedule[i].lessonPerDay += 1;
          }
        }
      }
    }
  }

  return {
    dates,
    schedule
  }
};