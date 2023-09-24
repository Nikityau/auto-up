
export interface Lesson {
    id: string,
    title: string,
    tasks: any[],
    addonMaterial: any[]
}

export interface DocModule {
    id: string
    title: string
    lessons: Lesson[]
}

export interface Doc {
    id: string
    title: string
    modules: DocModule[]
}