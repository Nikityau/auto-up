import {StudentSchedule} from "../../../../shared/data/interface/student-schedule.interface";
import {Student} from "../../../../shared/data/interface/student.interface";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";


interface GroupRes {
    id: string
    students: {
        id: string,
        first_name: string,
        last_name: string,
        raw_password: string
    }[],
    teacher: {
        id: string,
        first_name: string,
        last_name: string,
    },
    moderator: {
        id: string,
        first_name: string,
        last_name: string
    }
}

interface AttRes {
    student: string,
    is_attend: boolean,
    lesson: number
}

export const usersAdapter = async (sch: StudentSchedule[]): Promise<StudentSchedule[]> => {
    for (let s of sch) {
        const st: Student[] = []

        const stRes = await axios.get(`${baseUrl}/api/v1/study_groups/${s.groupId}/`)

        for (let student of (stRes.data as GroupRes).students) {
            st.push({
                id: student.id,
                name: student.first_name,
                surname: student.last_name,
                isIn: null,
                avatar: null
            })
        }

        const attRes = await axios.get(`${baseUrl}/api/v1/study_groups/${s.groupId}/attend_status/`, {
            params: {
                lesson: s.lessonId,
            }
        })

        for(let stAtt of (attRes.data as AttRes[])) {
            const el = st.find(st => st.id == stAtt.student)

            if(el) {
                el.isIn = stAtt.is_attend
            }
        }

        s.students = st
    }

    return sch
}