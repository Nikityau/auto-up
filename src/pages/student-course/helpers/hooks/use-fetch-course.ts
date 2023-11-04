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

export type ILesson = {
    taskBlock: {
        id: string,
        name: string,
        taskAmount: number
    }[]
} & Omit<CourseLesson, 'tasks'>

export const useFetchCourse = (courseStore: CourseStore, loader: LoaderStore) => {
    const [course, setCourse] = useState<CourseRes>(null)

    const [currModel, setCurrModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)

    const [lesson, setLesson] = useState<ILesson>(null)
    const [lessons, setLesssons] = useState<ILesson[]>(null)

    const [tasks, setTasks] = useState<CourseTask[]>(null)

    const errHandler = useErrorHandler()

    useEffect(() => {
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

    const fetchLessons = async (module: IModule) => {
        console.log('mod', module.id);
        
        const lessonsRes = await axios.get(`${baseUrl}/api/v1/courses/${course.id}/modules/${module.id}/`)
        const lessonsData = lessonsRes.data as LessonsRes;
        
        const lessons: ILesson[] = lessonsData.lessons.map(l => ({
            id: l.id,
            number: l.number,
            taskBlock: l.task_blocks.map(t => ({
                id: t.id,
                name: t.name,
                taskAmount: t.tasks_amount
            }))
        })).sort((l1, l2) => l1.number - l2.number)

        setLesssons(lessons)
        setLesson(lessons[0])
    }

    const onSetCurrentLesson = (lesson: ILesson) => {
        setLesson(lesson)
        fetchTasks(lesson)
    }

    const fetchTasks = async (lesson: ILesson) => {
        const tasksState: CourseTask[] = []
        console.log(lesson);
        
        const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/`)
      
        for(let tb of lesson.taskBlock) {
            console.log(tb);



            tasksState.push({
                id: tb.id,
                title: tb.name,
                description: [],
                icon: null,
                solvedTasks: 0,
                tasksCount: tb.taskAmount
            })
        }
        console.log('ts',tasksState);
        

        setTasks(tasksState)
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