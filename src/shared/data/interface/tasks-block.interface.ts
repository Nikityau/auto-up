import {Task} from "./task.interface";

export interface TasksBlock {
    id: string
    title: string,
    subtitle: string,
    number: number
    tasks: Task[]
}