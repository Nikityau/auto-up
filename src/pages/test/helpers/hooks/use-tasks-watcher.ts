import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios, {AxiosError} from "axios";

import {TestStore} from "../../store/test-store";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";
import {baseUrl} from "../../../../shared/api/base-url";
import {nanoid} from "nanoid";

export const useTasksWatcher = (testStore: TestStore, cookie: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const nav = useNavigate()
    const {courseId, lessonId, taskBlockId} = useParams()

    useEffect(() => {
        (async () => {
            const key = nanoid()
            loader.add(key)

            try {
                const tasks = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lessonId}/tasks/`, {
                    headers: {
                        Authorization: `Token ${cookie.token}`
                    },
                    params: {
                        task_block: taskBlockId
                    }
                })

                console.log(tasks.data)
            } catch(e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(key)
            }
        })()
    }, [])

    useEffect(() => {
       /* if(testStore.isEnd) {
            nav(`finished`)
        }*/
    }, [testStore.isEnd])

    useEffect(() => {
        //testStore.setTest()

        return () => {
            testStore.dispose()
        }
    }, [])
}