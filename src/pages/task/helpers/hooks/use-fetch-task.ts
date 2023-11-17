import {useParams} from "react-router-dom";

import {baseUrl} from "../../../../shared/api/base-url";
import {useFetch} from "../../../../shared/helpers/hooks/use-fetch";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export const useFetchTask = () => {
    const {courseId, taskId, lessonId} = useParams()
    const errHandler = useErrorHandler()
    const {off, on} = useLoader()

    const task = useFetch({
        url: `${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/${taskId}/`,
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


    return task
}