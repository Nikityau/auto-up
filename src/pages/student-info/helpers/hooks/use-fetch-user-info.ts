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
    }[],
    course: string,
    id: string,
    name: string
}

interface SchRes {
    course: {
        id: string,
        title: string
    }
}

export interface UserInfo {
    id: string,
    first_name: string,
    last_name: string,
    groupId:string,
    courseId: string,
    course: string,
    groupName: string
}

export const useFetchUserInfo = (token: string, loader: LoaderStore) => {
    const [user, setUser] = useState<UserInfo>()
    const {groupId, studentId} = useParams()

    useEffect(() => {
        (async () => {
            loader.add('user-info')
            const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const groupData = groupRes.data as GroupRes

            const sch = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
                headers: {
                    Authorization: `Token ${token}`
                },
                params: {
                    group: groupData.id
                }
            })

            for(let user of groupData.students) {
                if(user.id == studentId) {
                    setUser({
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        groupId: groupData.id,
                        course: (sch.data as SchRes[])?.[0].course.title,
                        groupName: groupData.name,
                        courseId: (sch.data as SchRes[])?.[0].course.id
                    })

                    break
                }
            }

            loader.remove('user-info')
        })()
    }, [])

    return user
}