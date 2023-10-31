
export interface Student {
    id: string,
    avatar: string,
    login: string,
    password: string,
    name: string,
    surname: string,
    patronymic?: string,
    status: "active" | "disable",
    attendance: number,
    enrolled: Date,
    needCheck?: boolean
}