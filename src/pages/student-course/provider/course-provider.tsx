import React from 'react';
import {observer} from "mobx-react-lite";

import {useFetchCourse} from "../helpers/hooks/use-fetch-course";
import {CourseStore} from "../store/course-store";
import {LoaderStore} from "../../../local-store/loader/loader-store";
import {CookieStore} from "../../../local-store/cookie/cookie-store";
import {ErrorStore} from "../../../local-store/error-store";

type Props = {
    courseStore: CourseStore
    loader: LoaderStore,
    cookie: CookieStore,
    error: ErrorStore
} & React.PropsWithChildren

const CourseProvider = observer(({children, courseStore,cookie, loader, error}:Props) => {
    useFetchCourse(courseStore, error, loader, cookie)

    return (
        <>
            {children}
        </>
    );
});

export default CourseProvider;