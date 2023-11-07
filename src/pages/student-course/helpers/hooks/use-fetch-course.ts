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
import { ModuleRes } from "../../../student-info/helpers/hooks/use-fetch-module";

interface Tasks {
    id: string
}

interface StudyGroups {
    id: string
}

export interface ILesson2 {
    id: string,
    number: number
}

export type ILesson = {
    taskBlock: {
        id: string,
        name: string,
        taskAmount: number
    }[]
} & Omit<CourseLesson, 'tasks'>

interface ILessonRes {
    id: string,
    task_blocks: {
        id: string,
        tasks_amount: number,
        name: string
    }[]
}

interface TaskRes {
    id: string,   
}

interface ISolutionStatusRes {
    solution_status: 'approved' | string
}

async function fetchData<R>(url: string): Promise<R> {
    const dataRes = await axios.get(url)

    return Promise.resolve(dataRes.data as R)
}

export const useFetchCourse = (loader: LoaderStore) => {
    const [course, setCourse] = useState<CourseRes>(null)

    const [currModel, setCurrModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)

    const [lesson, setLesson] = useState<ILesson2>(null)
    const [lessons, setLessons] = useState<ILesson2[]>(null)

    const [tasks, setTasks] = useState<CourseTask[]>(null)

    const errHandler = useErrorHandler()

    useEffect(() => {
        fetchCourse()
    }, [])

    const fetchCourse = async () => {
        const courseData = await fetchData<CourseRes[]>(`${baseUrl}/api/v1/courses/`)

        setCourse({
            id: courseData[0].id,
            title: courseData[0].title,
            modules: null
        })
        
        fetchModules(courseData[0])
    }

    const fetchModules = async (course:CourseRes) => {
        const moduleData = await fetchData<IModule[]>(`${baseUrl}/api/v1/courses/${course.id}/modules/`)
        setModules(moduleData)
        onSetModule(moduleData[0])
    }

    const fetchLessons = async (module: IModule) => {        
        const lessonsData = await fetchData<LessonsRes>(`${baseUrl}/api/v1/courses/${course.id}/modules/${module.id}/`)

        const lessons: ILesson2[] = lessonsData.lessons.map(l => ({
            id: l.id,
            number: l.number
        })).sort((l1, l2) => l1.number - l2.number)
        setLessons(lessons)
        setLesson(lessons[0])
    }

    const fetchTasks = async (lesson: ILesson2) => {
        const tasksState:CourseTask[] = []
        
        const taskRes = await fetchData<ILessonRes>(`${baseUrl}/api/v1/courses/${course.id}/lessons/${lesson.id}/`)
        const groupRes = await fetchData<{ id: string }[]>(`${baseUrl}/api/v1/study_groups/`)

        for(let tb of taskRes.task_blocks) {
            const tasksRes = await axios.get(`${baseUrl}/api/v1/courses/${course.id}/lessons/${lesson.id}/tasks/`, {
                params: {
                    task_block: tb.id
                }
            })
            const taskData = tasksRes.data as TaskRes[]
            
            let approvedCount = 0

            for(let sol of taskData) {
                const solRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupRes[0].id}/solutions/`, {
                    params: {
                        solution_status: 'approved',
                        task: sol.id
                    }
                })
                const solData = solRes.data as ISolutionStatusRes[]
                console.log(solData);
                
                if(solData[0]?.solution_status == 'approved') {
                    approvedCount += 1
                }
             }


            tasksState.push({
                id: tb.id,
                title: tb.name,
                description: [
                    `Нерешенных - ${tb.tasks_amount - approvedCount}`,
                    `Прогресс по блоку - ${approvedCount == tb.tasks_amount ? 'Завершено' : 'В процессе'}`
                ],
                tasksCount: tb.tasks_amount,
                solvedTasks: approvedCount,
                icon: null
            })
        }
        setTasks(tasksState)
    }

    const onSetCurrentLesson = (lesson: ILesson2) => {
        setLesson(lesson)
        fetchTasks(lesson)
    }

    const onSetModule = (module: IModule) => {        
        setCurrModule(module)
        fetchLessons(module)
    }

    return {
        course,
        currModel,
        modules,
        lesson,
        lessons,
        tasks,
        onSetModule,
        onSetCurrentLesson
    }
}