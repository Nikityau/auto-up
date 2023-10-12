import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import { nanoid } from "nanoid";

interface GroupRes {
    students: {
        id: string
        first_name: string,
        last_name: string
    }[]
}

interface AttStatRes {
    student: string,
    is_attend: boolean,
    lesson: string
}

interface SchRes {
    id: string,
    lesson: {
        id: string,
        title: string,
    },
    start_time: string,
    end_time: string,
    duration_minutes: number
}

export interface AttStat {
    id: string,
    lesson: string,
    startDate: Date,
    studentAttend: boolean
}

export const useFetchAtt = (token: string, loader: LoaderStore) => {
    const [att, setAtt] = useState<AttStat[]>()
    const {studentId, groupId} = useParams()


    useEffect(() => {
        (async () => {
            loader.add('st-att')
            const schRes = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
                params: {
                    group: groupId
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const stAtt = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/attend_status/`, {
                params: {
                    student: studentId
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            })

            const schData = schRes.data as SchRes[]
            const stAttData = stAtt.data as AttStatRes[]

            const attState:AttStat[] = []

            for(let sch of schData) {
                const att = stAttData.find(st => st.lesson == sch.lesson.id)

                attState.push({
                    id: nanoid(),
                    lesson: sch.lesson.title,
                    startDate: new Date(sch.start_time),
                    studentAttend: att.is_attend
                })
            }

            setAtt(attState)
            loader.remove('st-att')
        })()
    }, [])

    return att
}
