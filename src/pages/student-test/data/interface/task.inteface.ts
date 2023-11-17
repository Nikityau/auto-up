import {TaskDescProps} from "../../../../enteties/task-description";

export interface TaskData extends TaskDescProps {
    id: string,
    code_example: string,
    user_code: string,
    status: string
}