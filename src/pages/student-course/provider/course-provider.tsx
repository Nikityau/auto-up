import React from 'react';
import {observer} from "mobx-react-lite";

import {useFetchCourse} from "../helpers/hooks/use-fetch-course";
import {CourseStore} from "../store/course-store";

type Props = {
    courseStore: CourseStore
} & React.PropsWithChildren

const CourseProvider = observer(({children, courseStore}:Props) => {
    useFetchCourse(courseStore)

    return (
        <>
            {children}
        </>
    );
});

export default CourseProvider;