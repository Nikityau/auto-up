import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {nanoid} from "nanoid";

import {TestStore} from "../../store/test-store";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";
import {baseUrl} from "../../../../shared/api/base-url";
import {TestData} from "../../data/interface/test.interface";
import {TaskData} from "../../data/interface/task.inteface";
import {debounce} from "../../../../shared/helpers/functions/debounce";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {NotifsContext} from "../../../../app/provider/with-notification";

interface TasksRes {
    id: string
}

interface TaskExtRes {
    id: string,
    code_examples: {
        code: string
    }[],
    task_images: {
        image: string
    }[],
    description: string,
    name: string
}

export const useTasksWatcher = (testStore: TestStore, cookie: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const nav = useNavigate()
    const {courseId, lessonId, taskBlockId} = useParams()
    const [code, setCode] = useState<string>("")
    const errHandler = useErrorHandler()
    const {addNotif} = useContext(NotifsContext)


    useEffect(() => {
        (async () => {
            const key = nanoid()
            loader.add(key)

            try {
                const tasks = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    },
                    params: {
                        task_block: taskBlockId
                    }
                })
                const taskData = tasks.data as TasksRes[]
                const test: TestData = {
                    id: nanoid(),
                    tasks: []
                }
                const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                for (let td of taskData) {
                    let task: TaskData = null

                    const taskRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/${td.id}/`, {
                        headers: {
                            Authorization: `Token ${cookie.token}`
                        }
                    })
                    const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/`, {
                        headers: {
                            Authorization: `Token ${cookie.token}`
                        },
                        params: {
                            task: td.id
                        }
                    })

                    let status = ''
                    const solData = solRes.data[0]
                    if (solData['solution_status'] == 'not viewed') {
                        status = 'Не просмотрено'
                    }
                    if (solData['solution_status'] == 'viewed') {
                        status = 'Просмотрено'
                    }
                    if (solData['solution_status'] == 'done') {
                        status = 'Ожидает проверки'
                    }
                    if (solData['solution_status'] == 'approved') {
                        status = 'Верно'
                    }
                    if (solData['solution_status'] == 'wrong') {
                        status = 'Неверно'
                    }

                    let userCode = null

                    try {
                        const url = `${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/${solData['id']}/`
                        const solResExt = await axios.get(url, {
                            headers: {
                                Authorization: `Token ${cookie.token}`
                            }
                        })

                        userCode = solResExt.data['solution']['solution_text']
                    } catch (e) {
                        errHandler(e)
                    }

                    const taskData = taskRes.data as TaskExtRes
                    task = {
                        id: taskData.id,
                        title: taskData.name,
                        description: taskData.description,
                        code_example: taskData.code_examples.length > 0 ? taskData.code_examples[0].code : null,
                        ioData: taskData?.task_images?.[0]?.image,
                        user_code: userCode,
                        number: 0,
                        status: status
                    }

                    test.tasks.push(task)
                }

                testStore.setTest(test)
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message
                })
            } finally {
                loader.remove(key)
            }
        })()
    }, [])

    const onChangeCode = async (value: string) => {
        setCode(value[0])

        try {
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })
            const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/`, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                },
                params: {
                    task: testStore.currentTask.id
                }
            })

            const solDone = await axios.put(`${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/${solRes.data[0].id}/done/`, {
                solution_text: value[0],
                solution_type: "code",
                solution_status: "viewed"
            }, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })

        } catch (e) {
            errHandler(e)
        }
    }

    const onSendSolution = async () => {
        try {
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })
            const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/`, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                },
                params: {
                    task: testStore.currentTask.id
                }
            })

            const solDone = await axios.put(`${baseUrl}/api/v1/study_groups/${groupRes.data[0].id}/solutions/${solRes.data[0].id}/done/`, {
                solution_text: code,
                solution_type: "code",
                solution_status: "done"
            }, {
                headers: {
                    Authorization: `Token ${cookie.token}`
                }
            })

            addNotif({
                id: nanoid(),
                title: 'Отправлено',
                description: 'Ваш код успешно отправлен',
                type: 'success'
            })

        } catch (e) {
           errHandler(e)
        }
    }

    useEffect(() => {
        if (testStore.isEnd) {
            nav(`/skillget/student/course/test/finished`)
        }
    }, [testStore.isEnd])

    useEffect(() => {
        //testStore.setTest()

        return () => {
            testStore.dispose()
        }
    }, [])

    return {
        onChangeCode: debounce(onChangeCode, 700),
        onSendSolution,
    }
}