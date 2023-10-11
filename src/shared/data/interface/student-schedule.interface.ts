import {Student} from "./student.interface";
import { AddonFile, Materials } from "./addon-file.interface";
import {TasksBlock} from "./tasks-block.interface";

export interface StudentSchedule {
    id: string,
    courseId: string,
    lessonId: string,
    groupId: string,
    date: Date,
    groupTitle: string,
    courseTitle: string
    lessonTitle: string
    timeStart: string,
    timeEnd: string,
    addonFiles: Materials,
    tasks: TasksBlock[],
    students: Student[]
}