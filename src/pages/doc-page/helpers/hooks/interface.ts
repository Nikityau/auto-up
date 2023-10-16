export interface Lesson {
    id: string,
    title: string,
    tasks: any[],
    number: number
    addonMaterial: any
}

export interface DocModule {
    id: string;
    title: string;
    number: number
    lessons: Lesson[];
}

export interface IDoc {
    id: string;
    title: string;
    modules: DocModule[];
}

export interface ResDoc {
    id: string,
    title: string,
    description: string,
    modules: {
        id: string,
        title: string,
        number: number,
        lessons: {
            id: string,
            title: string,
            number: number,
            manual: string,
            task_blocks: {
                id: string,
                name: string
            }[]
        }[]
    }[]
}