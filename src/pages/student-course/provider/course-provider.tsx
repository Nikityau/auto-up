import React from 'react';
import { observer } from "mobx-react-lite";

import { ILesson, ILesson2, useFetchCourse } from "../helpers/hooks/use-fetch-course";
import { CourseStore } from "../store/course-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import { CourseRes, IModule } from '../helpers/hooks/types/res.types';
import { FType } from '../../../shared/helpers/types/f-types';
import { CourseLesson } from '../data/interface/course-lesson.interface';
import { CourseTask } from '../data/interface/course-task.interface';

interface ICoruseContext {
    modules: IModule[],
    currentModule: IModule,
    course: CourseRes,
    currentLesson: ILesson2,
    lessons: ILesson2[],
    tasks: CourseTask[]
    onSetModule: FType<IModule, void>
    onSetLesson: FType<ILesson2, void>
}

export const CourseContext = React.createContext<ICoruseContext>(null)

type Props = {
    loader: LoaderStore,
} & React.PropsWithChildren

const CourseProvider = observer(({ children, loader }: Props) => {
    const {
        modules,
        course,
        currModel,
        onSetModule,
        lesson,
        lessons,
        onSetCurrentLesson,
        tasks
    } = useFetchCourse(loader)

    return (
        <CourseContext.Provider value={{
            modules,
            course,
            currentModule: currModel,
            onSetModule,
            lessons,
            tasks,
            currentLesson: lesson,
            onSetLesson: onSetCurrentLesson
        }}>
            {children}
        </CourseContext.Provider>
    );
});

export default CourseProvider;