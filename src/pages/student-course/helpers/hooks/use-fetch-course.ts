import {useEffect} from "react";
import {CourseStore} from "../../store/course-store";
import {ErrorStore} from "../../../../local-store/error-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {nanoid} from "nanoid";
import axios, {AxiosError} from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {CourseModule} from "../../data/interface/course-module.interface";
import {CourseLesson} from "../../data/interface/course-lesson.interface";
import {CourseTask} from "../../data/interface/course-task.interface";

interface CourseRes {
    id: string,
    title: string,
    modules: {
        id: string,
        title: string
    }[]
}

interface LessonsRes {
    id: string,
    title: string,
    lessons: {
        id: string
        task_blocks: {
            id: string,
            tasks_amount: number,
            name: string
        }[]
    }[]
}

interface Tasks {
    id: string
}


interface StudyGroups {
    id: string
}


interface SolRes {
    id: string,
    solution_status: 'now viewed' | 'viewed' | 'approved' | 'wrong'
}

export const useFetchCourse = (courseStore: CourseStore, error: ErrorStore, loader: LoaderStore, cookie: CookieStore) => {
    useEffect(() => {
        (async () => {
            const key = nanoid()
            loader.add(key)
            try {
                const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                const groupData = (groupRes.data as StudyGroups[])[0]

                const courseRes = await axios.get(`${baseUrl}/api/v1/courses/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                const courseData = (courseRes.data as CourseRes[])[0]
                courseStore.setCourse({
                    id: courseData.id,
                    title: courseData.title,
                    modules: null,
                    icon: null
                })
                const modules: CourseModule[] = []
                for (let module of courseData.modules) {
                    modules.push({
                        id: module.id,
                        title: module.title,
                        lessons: null
                    })
                }
                courseStore.setModules(modules)
                courseStore.setModule(modules[0].id)

                const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/modules/${courseStore.currentModule.id}/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                const lessonsData = lessonsRes.data as LessonsRes
                const lessons = await fetchLessons(lessonsData, groupData.id)
                courseStore.setLessons(lessons)
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(key)
            }
        })()
    }, [])

    const fetchLessons = async (lessonsData, groupId: string) => {
        const lessons: CourseLesson[] = []

        for (let l of lessonsData.lessons) {
            const tasks: CourseTask[] = []

            for (let task of l.task_blocks) {
                const tbSolRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/lessons/${l.id}/tasks/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    },
                    params: {
                        task_block: task.id
                    }
                })
                const tbSolData = tbSolRes.data as Tasks[]
                let solvedTaskCount = 0;
                for (let tb of tbSolData) {
                    try {
                        const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/`, {
                            headers: {
                                Authorization: `Token ${cookie.token}`
                            },
                            params: {
                                task: tb.id
                            }
                        })
                        const solData = (solRes.data as SolRes[])
                        if (solData.length > 0 && solData[0].solution_status == 'approved') {
                            solvedTaskCount += 1
                        }
                    } catch (e) {
                        const err = e as AxiosError
                        error.addError({
                            id: nanoid(),
                            title: err['code'],
                            description: err.message + '\n' + err.config.url
                        })
                    }
                }

                tasks.push({
                    id: task.id,
                    title: task.name,
                    icon: null,
                    description: null,
                    solvedTasks: solvedTaskCount,
                    tasksCount: task.tasks_amount
                })
            }

            lessons.push({
                id: l.id,
                title: null,
                tasks: tasks
            })
        }

        return lessons
    }

    const fetchDataByModule = () => {

    }

    useEffect(() => {
        (async () => {
            if(!courseStore.currentModule?.id || !courseStore.currentModule?.id) return null

            const key = nanoid()
            try {
                loader.add(key)

                const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                const groupData = (groupRes.data as StudyGroups[])[0]

                const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/modules/${courseStore.currentModule.id}/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    }
                })
                const lessonsData = lessonsRes.data as LessonsRes
                const lessons = await fetchLessons(lessonsData, groupData.id)
                courseStore.setLessons(lessons)
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(key)
            }
        })()
    }, [courseStore.currentModule?.id])

    return fetchDataByModule
}