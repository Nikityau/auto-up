import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";

interface GroupRes {
    students: {
        id: string
       first_name: string,
       last_name: string
    }[]
}

export const useFetchAtt = (token: string) => {
    const [user, setUser] = useState<any>()
    const {groupId, studentId} = useParams()

    useEffect(() => {
        (async () => {
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            const f = (groupRes.data as GroupRes).students.find(u => u.id == studentId)
            setUser(f)

        })()
    }, [])

    return {
        user
    }
}
