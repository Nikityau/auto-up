import {TasksBlock} from "../../../../shared/data/interface/tasks-block.interface";

export interface StudentLesson {
    id: string,
    lesson_number: number,
    theme: string,
    was: boolean,
    lesson_was: boolean,
    tasks: TasksBlock[]
}