import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../../pages/student-course/store/course-store";
import CourseTitle from "./ui/course-title";
import Modules from "./ui/modules";
import courseImg from './assets/course-icon.png'
import { IModule } from '../../pages/student-course/helpers/hooks/types/res.types';
import { FType } from '../../shared/helpers/types/f-types';

import './style/index.scss'

type Props = {
    courseTittle: string,
    modules: IModule[],
    currentModule: IModule,
    onChangeModule: FType<IModule, void>
}

const CourseModules = ({courseTittle, modules, currentModule, onChangeModule}: Props) => {
    return (
        <div className={'course-modules'}>
            <div className={'course-modules__container'}>
                <CourseTitle title={courseTittle}/>
                <Modules
                    modules={modules}
                    current={currentModule}
                    onChangeModule={onChangeModule}
                />
                <div className={'course-icon'}>
                    <img src={courseImg} alt={'course-icon'}/>
                </div>
            </div>
        </div>
    );
};

export default CourseModules;