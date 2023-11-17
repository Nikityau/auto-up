import axios from "axios";
import {useQuery} from "react-query";

import {baseUrl} from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";


export const useFetchCourses = () => {
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const query = useQuery('knowledge-base', async () => {
        on()
        const {data} = await axios.get(`${baseUrl}/api/v1/courses/`);

        return data
    }, {
        onSuccess: () => {
            off()
        },
        onError: (e) => {
            errHandler(e)
            off()
        },
    })

    return query.data;
};