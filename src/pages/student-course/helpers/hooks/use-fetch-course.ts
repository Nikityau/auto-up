import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import { CourseStore } from "../../store/course-store";
import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";
import { CourseModule } from "../../data/interface/course-module.interface";
import { CourseLesson } from "../../data/interface/course-lesson.interface";
import { CourseTask } from "../../data/interface/course-task.interface";
import { CourseRes, IModule, LessonsRes, SolRes } from "./types/res.types";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

interface Tasks {
    id: string
}

interface StudyGroups {
    id: string
}

export const useFetchCourse = (courseStore: CourseStore, loader: LoaderStore) => {
    const [course, setCourse] = useState<CourseRes>(null)
    
    const [currModel, setCurrModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)
    
    const [lesson, setLesson] = useState(null)
    const [lessons, setLesssons] = useState<CourseLesson[]>(null)


    const errHandler = useErrorHandler()

    useEffect(() => {
        //fetchBase()

        fetchModules()
    }, [])

    const fetchModules = async () => {
        const courseRes = await axios.get(`${baseUrl}/api/v1/courses/`)
        const courseData = (courseRes.data as CourseRes[])[0]
        courseStore.setCourse({
            id: courseData.id,
            title: courseData.title,
            modules: null,
            icon: null
        })
        let modules: CourseModule[] = []
        for (let module of courseData.modules) {
            modules.push({
                id: module.id,
                title: module.title,
                number: module.number,
                lessons: null
            })
        }
        modules = modules.sort((m1, m2) => m1.number - m2.number)

        setCourse({
            id: courseData.id,
            title: courseData.title,
            modules: null
        })
        setModules(modules)
        setCurrModule(modules[0])
    }

    const onSetModule = (module: IModule) => {
        setCurrModule(module)
        fetchLessons(module)
    }



    const fetchBase = async () => {
        const key = nanoid()
        loader.add(key)
        try {
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`)
            const groupData = (groupRes.data as StudyGroups[])[0]

            const courseRes = await axios.get(`${baseUrl}/api/v1/courses/`)
            const courseData = (courseRes.data as CourseRes[])[0]
            courseStore.setCourse({
                id: courseData.id,
                title: courseData.title,
                modules: null,
                icon: null
            })
            let modules: CourseModule[] = []
            for (let module of courseData.modules) {
                modules.push({
                    id: module.id,
                    title: module.title,
                    number: module.number,
                    lessons: null
                })
            }
            modules = modules.sort((m1, m2) => m1.number - m2.number)
            courseStore.setModules(modules)
            courseStore.setModule(modules[0].id)

            const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/modules/${courseStore.currentModule.id}/`)
            const lessonsData = lessonsRes.data as LessonsRes;
            const lessons = await fetchLessons(lessonsData, groupData.id);

            courseStore.setLessons(lessons)
        } catch (e) {
           errHandler(e)
        } finally {
            loader.remove(key)
        }
    }

    const fetchLessons = async (module: IModule) => {
        const lessons: CourseLesson[] = []

        const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`)
        const groupId = (groupRes.data as StudyGroups[])[0].id
    

        const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/modules/${courseStore.currentModule.id}/`)
        const lessonsData = lessonsRes.data as LessonsRes;

        for (let l of lessonsData.lessons) {
            const tasks: CourseTask[] = []

            for (let task of l.task_blocks) {
                const tbSolRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/lessons/${l.id}/tasks/`)
                const tbSolData = tbSolRes.data as Tasks[]
                let solvedTaskCount = 0;
                for (let tb of tbSolData) {
                    try {
                        const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/`, {
                            params: {
                                task: tb.id
                            }
                        })
                        console.log(task.name, task.tasks_amount,solRes.data);
                        const solData = (solRes.data as SolRes[])
                        if (solData.length > 0 && solData[0].solution_status == 'approved') {
                            solvedTaskCount += 1
                        }
                    } catch (e) {
                        errHandler(e)
                    }
                }

                tasks.push({
                    id: task.id,
                    title: task.name,
                    icon: null,
                    description: 
                    [
                        `Заданий решенных верно: ${solvedTaskCount}`,
                        `Общий статус: ${solvedTaskCount == task.tasks_amount ? 'Завершено' : 'В процессе'}`
                    ],
                    solvedTasks: solvedTaskCount,
                    tasksCount: task.tasks_amount
                })
            }

            lessons.push({
                id: l.id,
                title: null,
                number: l.number,
                tasks: tasks
            })
        }

        setLesssons(lessons.sort((l1, l2) => l1.number - l2.number))
    }

    const fetchDataByModule = () => {

    }

    useEffect(() => {
        // (async () => {
        //     if (!courseStore.currentModule?.id || !courseStore.currentModule?.id) return null

        //     const key = nanoid()
        //     try {
        //         loader.add(key)

        //         const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`)
        //         const groupData = (groupRes.data as StudyGroups[])[0]

        //         const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${courseStore.currentCourse.id}/modules/${courseStore.currentModule.id}/`)
        //         const lessonsData = lessonsRes.data as LessonsRes
        //         const lessons = await fetchLessons(lessonsData, groupData.id)
        //         courseStore.setLessons(lessons)
        //     } catch (e) {
        //         errHandler(e)
        //     } finally {
        //         loader.remove(key)
        //     }
        // })()
    }, [courseStore.currentModule?.id])

    return {
        course,
        currModel,
        modules,
        onSetModule
    }
}