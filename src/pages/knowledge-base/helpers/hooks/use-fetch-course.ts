import {useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";

import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

interface Course {
    id: string,
    title: string,
    preview: string,
}

export const useFetchCourses = (loader: LoaderStore) => {
    const errHandler = useErrorHandler()


    const query = useQuery('knowledge-base', async () => {
        loader.add(`${baseUrl}/api/v1/courses/`)
        const {data} = await axios.get(`${baseUrl}/api/v1/courses/`);

        return data
    }, {
        onSuccess: () => {
            loader.remove(`${baseUrl}/api/v1/courses/`)
        },
        onError: (e) => {
            errHandler(e)
            loader.remove(`${baseUrl}/api/v1/courses/`)
        },
    })

    return query.data;
};