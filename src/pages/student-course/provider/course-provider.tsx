import React, {useEffect} from 'react';
import { observer } from "mobx-react-lite";

import {courseEM} from "../store/course-em";


export const CourseContext = React.createContext<null>(null)

type Props = {
} & React.PropsWithChildren

const CourseProvider = observer(({ children }: Props) => {
    useEffect(() => {
        courseEM.emit('fetch-course')
    }, [])

    return (
        <CourseContext.Provider value={null}>
            {children}
        </CourseContext.Provider>
    );
});

export default CourseProvider;