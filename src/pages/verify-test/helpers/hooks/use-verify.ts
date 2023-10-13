import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TaskRes} from "../../../task/provider/task.provider";
import axios, {AxiosError} from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {nanoid} from "nanoid";
import {ErrorStore} from "../../../../local-store/error-store";

export type SolutionStatus = 'viewed' | 'approved' | 'wrong'

interface SolStatRes {
    id: string,
}

interface SolutionRes {
    solution: null | any
}

export const useVerify = (token: string, loader: LoaderStore, error: ErrorStore) => {
    const {courseId, lessonId, taskId, studentId, groupId} = useParams()
    const [task, setTask] = useState<TaskRes>(null)
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        (async () => {
            const key = nanoid()
            loader.add(key)
            try {
                const taskRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/${taskId}/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

                const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions`, {
                    headers: {
                        Authorization: `Token ${token}`
                    },
                    params: {
                        student: studentId,
                        task: taskId
                    }
                })

                if(stRes.data.length == 0) return null

                const studentSolution = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/${stRes.data[0]['id']}/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                console.log(studentSolution.data)


                setTask(taskRes.data)
                setSolution(studentSolution.data['solution'])
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

            await onSetStatus('approved')
        })()
    }, [])

    const onSetStatus = async (status: SolutionStatus) => {
        const key = nanoid()
        try {
            loader.add(key)
            const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions`, {
                headers: {
                    Authorization: `Token ${token}`
                },
                params: {
                    student: studentId,
                    task: taskId
                }
            })

            if(stRes.data.length == 0) return null

            const stData = (stRes.data as SolStatRes[])[0]



            const resolutionRes = await axios.put(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/${stData.id}/resolution/`, {
                solution_status: status
            }, {
                headers: {
                    Authorization: `Token ${token}`
                },
            })
            console.log(resolutionRes.data)
        } catch (e) {
            const err = e as AxiosError
            error.addError({
                id: nanoid(),
                title: err['code'],
                description: err.message + '\n' + (err?.config?.url || err)
            })
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