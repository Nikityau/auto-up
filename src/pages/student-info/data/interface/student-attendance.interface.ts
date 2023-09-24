export interface StudentAttendance {
    id: string,
    course: string,
    lessons_count: number,
    attendance: Attendance[]
}

export interface Attendance {
    id: string,
    theme: string,
    date: Date,
    was: boolean
}