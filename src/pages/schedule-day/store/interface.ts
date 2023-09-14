export interface AddonFile {
    id: string,
    url: string,
    title: string
}

export interface TaskBlock {
    id: string
    title: string,
    subtitle: string,
    tasks: Task[]
}

export interface Task {
    id: string,
    isSpecial: boolean
}

export interface Student {
    id: string,
    avatar: string,
    name: string,
    surname: string,
    patronymic?: string,
    isIn: boolean | null
}

export interface Schedule {
    id: string
    date: Date,
    groupTitle: string,
    courseTitle: string
    lessonTitle: string
    timeStart: string,
    timeEnd: string,
    addonFiles: AddonFile[],
    tasks: TaskBlock[],
    students: Student[]
}