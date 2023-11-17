import axios from "axios";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";

import {baseUrl} from "../../../../shared/api/base-url";
import {groupAdapter} from "../adapter/group-adapter";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {useFetch} from "../../../../shared/helpers/hooks/use-fetch";


export const useFetchGroup = () => {
    const {id} = useParams();
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const group = useFetch({
        url: `${baseUrl}/api/v1/study_groups/${id}/`,
        onError: (err) => {
            errHandler(err)
        },
        onModify: async (data) => {
            return await groupAdapter(data);
        },
        onBeforeLoadStart: () => {
            on()
        },
        onComplete: () => {
            off()
        }
    })

    return group;
};