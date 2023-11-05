export interface IModule {
    id: string,
    title: string,
    number: number
}

export interface CourseRes {
    id: string,
    title: string,
    modules: IModule[]
}


export interface LessonsRes {
    id: string,
    title: string,
    lessons: {
        id: string
        number: number
        task_blocks: {
            id: string,
            tasks_amount: number,
            name: string
        }[]
    }[]
}

export interface SolRes {
    id: string,
    solution_status: 'now viewed' | 'viewed' | 'approved' | 'wrong'
}