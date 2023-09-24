export interface Student {
    id: string,
    avatar: string,
    name: string,
    surname: string,
    patronymic?: string,
    isIn: boolean | null
}