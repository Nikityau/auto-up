import React from 'react';
import {observer} from "mobx-react-lite";

import {useFetchCourse} from "../helpers/hooks/use-fetch-course";
import {CourseStore} from "../store/course-store";
import {LoaderStore} from "../../../local-store/loader/loader-store";
import { CourseRes, IModule } from '../helpers/hooks/types/res.types';
import { FType } from '../../../shared/helpers/types/f-types';

interface ICoruseContext {
    modules: IModule[],
    currentModule: IModule,
    course: CourseRes,
    onSetModule: FType<IModule, void>
}

export const CourseContext = React.createContext<ICoruseContext>(null)

type Props = {
    courseStore: CourseStore
    loader: LoaderStore,
} & React.PropsWithChildren

const CourseProvider = observer(({children, courseStore, loader}:Props) => {
    const {modules, course, currModel, onSetModule} = useFetchCourse(courseStore, loader)

    return (
        <CourseContext.Provider value={{
            modules,
            course,
            currentModule: currModel,
            onSetModule
        }}>
            {children}
        </CourseContext.Provider>
    );
});

export default CourseProvider;