import {nanoid} from "nanoid";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

import p1_img from "../../assets/p1.png";
import p2_img from "../../assets/p2.png";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {baseUrl} from "../../../../shared/api/base-url";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../../local-store/error-store";

interface Course {
    id: string,
    title: string,
    preview: string,
}

const courseList: Course[] = [
    {
        id: nanoid(),
        title: "python start",
        preview: p1_img
    },
    {
        id: nanoid(),
        title: "python pro",
        preview: p2_img
    }
];

export const useFetchCourses = (cookieStore: CookieStore, loader: LoaderStore, error: ErrorStore) => {
    const [courses, setCourses] = useState<Course[]>(null);

    useEffect(() => {
        (async () => {
            try {
                loader.add(`${baseUrl}/api/v1/courses/`)
                const {data} = await axios.get(`${baseUrl}/api/v1/courses/`, {
                    headers: {
                        Authorization: `Token ${cookieStore.token}`
                    }
                });

                setCourses(data);
            } catch (e) {
                const err = e as AxiosError
                error.addError({
                    id: nanoid(),
                    title: err['code'],
                    description: err.message + '\n' + err.config.url
                })
            } finally {
                loader.remove(`${baseUrl}/api/v1/courses/`)

            }
        })();
    }, []);


    return courses;
};