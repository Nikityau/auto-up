import axios from "axios";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";

import {baseUrl} from "../../../../shared/api/base-url";
import {groupAdapter} from "../adapter/group-adapter";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";


export const useFetchGroup = () => {
    const {id} = useParams();
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const query = useQuery('group-fetch', async () => {
        on()
        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/${id}/`);
        const adapted = await groupAdapter(data);

        return adapted
    }, {
        onError: (e) => {
            errHandler(e)
            off()
        },
        onSuccess: () => {
            off()
        }
    })

    return query.data;
};