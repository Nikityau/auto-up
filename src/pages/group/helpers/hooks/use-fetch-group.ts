import { nanoid } from "nanoid";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";
import { groupAdapter } from "../adapter/group-adapter";
import { ErrorStore } from "../../../../local-store/error-store";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";


export const useFetchGroup = (loader: LoaderStore, error: ErrorStore) => {
    const { id } = useParams();
    const errHandler = useErrorHandler()

    const query = useQuery('group-fetch', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/${id}/`);
        const { data } = await axios.get(`${baseUrl}/api/v1/study_groups/${id}/`);
        const adapted = await groupAdapter(data);

        return adapted
    }, {
        onError: (e) => {
            errHandler(e)

            loader.remove(`${baseUrl}/api/v1/study_groups/${id}/`);
        },
        onSuccess: () => {
            loader.remove(`${baseUrl}/api/v1/study_groups/${id}/`);
        }
    })

    return query.data;
};