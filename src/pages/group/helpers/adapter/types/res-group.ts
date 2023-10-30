interface StudentRes {
    id: string,
    first_name: string,
    last_name: string,
    raw_password: string,
    username: string
}

export interface ResGroup {
    id: string,
    name: string,
    course: string,
    students: StudentRes[]
}



export interface AttStatsRes {
    student: string,
    is_attend: boolean,
    lesson: string
}

export interface CourseRes {
    title: string
}