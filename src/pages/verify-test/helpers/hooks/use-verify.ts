import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";

import { TaskRes } from "../../../task/provider/task.provider";
import { baseUrl } from "../../../../shared/api/base-url";
import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { ErrorStore } from "../../../../local-store/error-store";
import { NotifsContext } from "../../../../app/provider/with-notification";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

export type SolutionStatus = 'viewed' | 'approved' | 'wrong'

interface SolStatRes {
    id: string,
}

interface SolutionRes {
    solution: null | any
}

export const useVerify = (loader: LoaderStore, error: ErrorStore) => {
    const { courseId, lessonId, taskId, studentId, groupId } = useParams()
    const [task, setTask] = useState<TaskRes>(null)
    const [solution, setSolution] = useState(null)

    const { addNotif } = useContext(NotifsContext)
    const errHandler = useErrorHandler()

    useEffect(() => {
        (async () => {
            const key = nanoid()
            loader.add(key)
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
                console.log(studentSolution.data)

                console.log(taskRes.data);

                setTask(taskRes.data)
                setSolution(studentSolution.data['solution']['solution_text'])
            } catch (e) {
                const err = e as AxiosError
                console.log(err, err.message)
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + (err?.config?.url || err)
                })
            } finally {
                loader.remove(key)
            }
        })()
    }, [])

    const onSetStatus = async (status: SolutionStatus) => {
        const key = nanoid()
        try {
            loader.add(key)
            const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions`, {
                params: {
                    student: studentId,
                    task: taskId
                }
            })

            if (stRes.data.length == 0) return null

            console.log(stRes.data);


            const stData = (stRes.data as SolStatRes[])[0]

            const resolutionRes = await axios.put(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/${stData.id}/resolution/`, {
                solution_status: status
            })


            addNotif({
                id: nanoid(),
                description: `Отметка поставлена - ${status == 'approved' ? 'Верно' : 'Неверно' }`,
                title: 'Отмека',
                type: 'success'
            })
        } catch (e) {
            errHandler(e)
        } finally {
            loader.remove(key)
        }
    }

    return {
        task,
        solution,
        onSetStatus
    }
}