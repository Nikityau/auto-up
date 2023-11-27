import {baseUrl} from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {useFetch} from "../../../../shared/helpers/hooks/use-fetch";


export const useFetchCourses = () => {
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const data = useFetch({
        url: `${baseUrl}/api/v1/courses/`,
        needCache: true,
        uniqueKey: 'knowledge-base',
        onError: (err) => {
            errHandler(err)
        },
        onBeforeLoadStart: () => {
            on()
        },
        onComplete: () => {
            off()
        }
    })

    return data;
};