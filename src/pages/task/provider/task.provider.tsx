import React from 'react';
import {useFetchTask} from "../helpers/hooks/use-fetch-task";
import {observer} from "mobx-react-lite";

type Props = {
} & React.PropsWithChildren

export type MarkDown = string

export interface TaskRes {
    id: string,
    code_examples: {
       code: string,
       programming_language: string
    }[],
    task_images: {
        image: string,
        type: string
    }[],
    task_files: any[],
    name: string,
    task_type: string,
    description: MarkDown,
    extra_data: any
}


interface ITaskContext {
    task: TaskRes
}

export const TaskContext = React.createContext<ITaskContext>(null)

const TaskProvider = observer(({children}:Props) => {

    const task = useFetchTask()

    return (
        <TaskContext.Provider value={{
            task,
        }}>
            {children}
        </TaskContext.Provider>
    );
});

export default TaskProvider;