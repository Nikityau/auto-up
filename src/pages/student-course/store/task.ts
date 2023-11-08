import axios from "axios";

import {ICourse} from "./course";
import {ILesson} from "./lessons";
import {baseUrl} from "../../../shared/api/base-url";
import {CourseEM, ICourseEMController} from "./course-em";

export interface ITask {
    id: string,
    title: string,
    description: string[],
    tasksCount: number,
    solvedTasks: number,
}

interface ILessonTaskBlock {
    id: string,
    task_blocks: {
        id: string,
        tasks_amount: number,
        name: string
    }[]
}


interface IGroup {
    id: string
}

interface ISolution {
    solution_status: 'approved' | string
}

export class Task implements ICourseEMController{
    tasks: ITask[] = null

    courseEM: CourseEM = null

    constructor(courseEM: CourseEM) {
        this.courseEM = courseEM
    }

    async fetch({course, lesson}: {course: ICourse, lesson: ILesson }) {
        const tasks: ITask[] = []

        const {data : lessonExt} = await axios.get<ILessonTaskBlock>(`${baseUrl}/api/v1/courses/${course.id}/lessons/${lesson.id}/`)
        const {data: group} = await axios.get<IGroup[]>(`${baseUrl}/api/v1/study_groups/`)

        for(let tb of lessonExt.task_blocks) {
            const {data:tasksId} = await axios.get<Pick<ITask, 'id'>[]>(`${baseUrl}/api/v1/courses/${course.id}/lessons/${lesson.id}/tasks/`, {
                params: {
                    task_block: tb.id
                }
            })

            let solvedCount = 0

            for(let sol of tasksId) {
                const {data: solutions} = await axios.get<ISolution[]>(`${baseUrl}/api/v1/study_groups/${group[0].id}/solutions/`, {
                    params: {
                        solution_status: 'approved',
                        task: sol.id
                    }
                })

                if(solutions[0]?.solution_status == 'approved') {
                    solvedCount += 1
                }
            }

            tasks.push({
                id: tb.id,
                title: tb.name,
                description: [
                    `Нерешенных - ${tb.tasks_amount - solvedCount}`,
                    `Прогресс по блоку - ${solvedCount == tb.tasks_amount ? 'Завершено' : 'В процессе'}`
                ],
                tasksCount: tb.tasks_amount,
                solvedTasks: solvedCount,
            })
        }

        this.tasks = tasks
        this.courseEM.emit('tasks', this.tasks)
    }

    set(data?: any) {
        return
    }
}