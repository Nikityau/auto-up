import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {useParams} from "react-router-dom";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

interface GroupRes {
    students: {
        id: string
        first_name: string,
        last_name: string
    }[]
}

export const useFetchUserInfo = (token: string, loader: LoaderStore) => {
    const [user, setUser] = useState<any>()
    const {groupId, studentId} = useParams()

    useEffect(() => {
        (async () => {
            loader.add('user-info')
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })

            for(let user of (groupRes.data as GroupRes).students) {
                if(user.id == studentId) {
                    setUser(user)

                    break
                }
            }

            loader.remove('user-info')
        })()
    }, [])

    return user
}