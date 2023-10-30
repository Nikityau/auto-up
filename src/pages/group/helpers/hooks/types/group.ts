import { Student } from "./student";

export interface Group {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: Student[]
}
