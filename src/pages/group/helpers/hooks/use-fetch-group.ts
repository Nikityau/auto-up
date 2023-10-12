import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {baseUrl} from "../../../../shared/api/base-url";
import {cookieStore} from "../../../../local-store/cookie/cookie-store";
import {groupAdapter} from "../adapter/group-adapter";
import {ErrorStore} from "../../../../local-store/error-store";
import {nanoid} from "nanoid";


export interface Student {
    id: string,
    avatar: string,
    login: string,
    password: string,
    name: string,
    surname: string,
    patronymic?: string,
    status: "active" | "disable",
    attendance: number,
    enrolled: Date
}

export interface Group {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: Student[]
}


export const useFetchGroup = (loader: LoaderStore, error: ErrorStore) => {
    const {id} = useParams();
    const [group, setGroup] = useState<Group>(null);

    useEffect(() => {
        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/study_groups/${id}/`);
                const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/${id}/`, {
                    headers: {
                        Authorization: `Token ${cookieStore.token}`
                    }
                });
                const adapted = await groupAdapter(data, cookieStore.token);
                setGroup(adapted)

            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(`${baseUrl}/api/v1/study_groups/${id}/`);

            }
        })();
    }, []);

    return group;
};