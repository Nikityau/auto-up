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
import {ModuleRes} from "../../../student-info/helpers/hooks/use-fetch-module";

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


async function fetchData<R>(url: string): Promise<R> {
    const dataRes = await axios.get(url)

    return Promise.resolve(dataRes.data as R)
}

export const useFetchCourse = (courseStore: CourseStore, loader: LoaderStore) => {
    const [course, setCourse] = useState<CourseRes>(null)

    const [currModel, setCurrModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)

    const [lesson, setLesson] = useState<ILesson2>(null)
    const [lessons, setLessons] = useState<ILesson2[]>(null)

    const [tasks, setTasks] = useState<CourseTask[]>(null)

    const errHandler = useErrorHandler()

    useEffect(() => {
        fetchModules()
    }, [])

    const fetchModules = async () => {
        const courseData = await fetchData<CourseRes[]>(`${baseUrl}/api/v1/courses/`)

        setCourse({
            id: courseData[0].id,
            title: courseData[0].title,
            modules: null
        })

        const moduleData = await fetchData<IModule[]>(`${baseUrl}/api/v1/courses/${courseData[0].id}/modules/`)
        setModules(moduleData)
        setCurrModule(moduleData[0])
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

    const fetchTasks = async () => {

    }

    const onSetCurrentLesson = (lesson: ILesson2) => {
        console.log(lesson.id)
        setLesson(lesson)
        fetchTasks()
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