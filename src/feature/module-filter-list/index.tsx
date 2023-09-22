import React from 'react';
import { FType } from '../../shared/helpers/types/f-types';
import CourseTitle from './ui/title';
import ModuleList from './ui/list';
import ModuleListProvider from './provider/module-list-provider';

import './style/index.scss'

type Props = {
    course: string,
    modules: string[],
    onChange?: FType<string, void>
}

const ModuleFilterList = ({ course, modules, onChange }: Props) => {
    return (
        <ModuleListProvider modules={modules} onChange={onChange}>
            <div className='module-list'>
                <CourseTitle
                    title={course}
                />
                <ModuleList
                    modules={modules}
                />
            </div>
        </ModuleListProvider>
    );
};

export default ModuleFilterList;