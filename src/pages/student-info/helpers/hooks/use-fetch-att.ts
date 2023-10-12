import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

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

export const useFetchAtt = (token: string, loader: LoaderStore) => {
    const [att, setAtt] = useState<any>()
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

            const attState = []

            for(let sch of schData) {

            }


            loader.remove('st-att')
        })()
    }, [])

    return att
}
