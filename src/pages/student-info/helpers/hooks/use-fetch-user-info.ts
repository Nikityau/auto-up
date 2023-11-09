import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";
import { useParams } from "react-router-dom";
import {loaderStore, LoaderStore} from "../../../../local-store/loader/loader-store";
import { useQuery } from "react-query";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";

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
    groupId: string,
    courseId: string,
    course: string,
    groupName: string
}

export const useFetchUserInfo = () => {
    const { groupId, studentId } = useParams()
    const {off,on} = useLoader(loaderStore)
    const err = useErrorHandler()

    const query = useQuery('user-info', async () => {
        on()
        const groupRes = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/`)
        const groupData = groupRes.data as GroupRes

        const sch = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
            params: {
                group: groupData.id
            }
        })

        for (let user of groupData.students) {
            if (user.id == studentId) {
                return {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    groupId: groupData.id,
                    course: (sch.data as SchRes[])?.[0].course.title,
                    groupName: groupData.name,
                    courseId: (sch.data as SchRes[])?.[0].course.id
                }
            }
        }


        return undefined
    }, {
        onSuccess: () => {
            off()
        },
        onError: (e) => {
            off()
            err(e)
        }
    })

    return query.data
}