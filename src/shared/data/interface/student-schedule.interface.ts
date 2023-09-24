import {Student} from "./student.interface";
import {AddonFile} from "./addon-file.interface";
import {TasksBlock} from "./tasks-block.interface";

export interface StudentSchedule {
    id: string
    date: Date,
    groupTitle: string,
    courseTitle: string
    lessonTitle: string
    timeStart: string,
    timeEnd: string,
    addonFiles: AddonFile[],
    tasks: TasksBlock[],
    students: Student[]
}