import { AddonFile, TaskBlock } from "../../../../pages/schedule-day/store/interface"

export interface Lesson {
    id: string,
    title: string,
    tasks: TaskBlock[],
    addonMaterial: AddonFile[]
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