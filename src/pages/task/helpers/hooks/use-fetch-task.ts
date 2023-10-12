import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {TaskRes} from "../../provider/task.provider";

export const useFetchTask = (token: string) => {
    const {courseId, taskId, lessonId} = useParams()
    const [task, setTask] = useState<TaskRes>(null)

    useEffect(() => {
        (async () => {
            const taskRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/${taskId}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })

            console.log('task',taskRes.data)

            setTask(taskRes.data)
        })()
    }, [])


    return task
}