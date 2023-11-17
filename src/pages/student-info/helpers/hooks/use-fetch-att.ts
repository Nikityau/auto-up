import axios from "axios";
import {nanoid} from "nanoid";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";

import {baseUrl} from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";


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

export const useFetchAtt = () => {
    const {studentId, groupId} = useParams()
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()




    const query = useQuery('att', async () => {
        on()
        const schRes = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
            params: {
                group: groupId
            },
        })
        const stAtt = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/attend_status/`, {
            params: {
                student: studentId
            },
        })

        const schData = schRes.data as SchRes[]
        const stAttData = stAtt.data as AttStatRes[]

        const attState: AttStat[] = []

        for (let sch of schData) {
            const att = stAttData.find(st => st.lesson == sch.lesson.id)
            attState.push({
                id: nanoid(),
                lesson: sch.lesson.title,
                startDate: new Date(sch.start_time),
                studentAttend: att.is_attend
            })
        }

        return attState
    }, {
        onError: (e) => {
            errHandler(e)
            off()
        },
        onSuccess: () => {
            off()
        }
    })

    return query.data
}
