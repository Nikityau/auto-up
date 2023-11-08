import {useEffect, useState} from "react";
import {ITask} from "../../store/task";
import {courseEM} from "../../store/course-em";

export const useTasks = () => {
    const [tasks, setTasks] = useState<ITask[]>(null)

    useEffect(() => {
        const unsub = courseEM.on('tasks', (data: ITask[]) => {
            setTasks(data)
        })

        return () => {
            unsub()
        }
    }, [])

    return tasks
}