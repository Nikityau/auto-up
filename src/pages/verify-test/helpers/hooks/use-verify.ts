import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";
import axios, {AxiosError} from "axios";
import {useContext, useEffect, useState} from "react";

import {TaskRes} from "../../../task/provider/task.provider";
import {baseUrl} from "../../../../shared/api/base-url";
import {NotifsContext} from "../../../../app/provider/with-notification";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export type SolutionStatus = 'viewed' | 'approved' | 'wrong'

interface SolStatRes {
    id: string,
}

export const useVerify = () => {
    const {courseId, lessonId, taskId, studentId, groupId} = useParams()
    const [task, setTask] = useState<TaskRes>(null)
    const [solution, setSolution] = useState(null)

    const {addNotif} = useContext(NotifsContext)
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    useEffect(() => {
        (async () => {
            on()
            try {
                const taskRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/${taskId}/`)

                const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions`, {
                    params: {
                        student: studentId,
                        task: taskId
                    }
                })

                if (stRes.data.length == 0) return null

                const studentSolution = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/${stRes.data[0]['id']}/`)

                setTask(taskRes.data)
                setSolution(studentSolution.data['solution']['solution_text'])
            } catch (e) {
                errHandler(e)
            } finally {
                off()
            }
        })()
    }, [])

    const onSetStatus = async (status: SolutionStatus) => {
        try {
            on()
            const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions`, {
                params: {
                    student: studentId,
                    task: taskId
                }
            })

            if (stRes.data.length == 0) return null

            const stData = (stRes.data as SolStatRes[])[0]

            const resolutionRes = await axios.put(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/${stData.id}/resolution/`, {
                solution_status: status
            })

            addNotif({
                id: nanoid(),
                description: `Отметка поставлена - ${status == 'approved' ? 'Верно' : 'Неверно'}`,
                title: 'Отмека',
                type: 'success'
            })
        } catch (e) {
            errHandler(e)
        } finally {
            off()
        }
    }

    return {
        task,
        solution,
        onSetStatus
    }
}