import {useParams} from "react-router-dom";

import {IDoc} from "./interface";
import {adapterDoc} from "../adapter/adapter-doc";
import {baseUrl} from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {useFetch} from "../../../../shared/helpers/hooks/use-fetch";

export const useFetchDoc = () => {
    const {id} = useParams();
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const doc = useFetch({
        url: `${baseUrl}/api/v1/courses/${id}/`,
        onError: (err) => {
            errHandler(err)
        },
        onModify: async (data) => {
            return await adapterDoc(data)
        },
        onBeforeLoadStart: () => {
            on()
        },
        onComplete: () => {
            off()
        }
    })

    return doc;
};