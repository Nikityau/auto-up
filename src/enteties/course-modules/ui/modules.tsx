import React from 'react';
import {observer} from "mobx-react-lite";

import Module from "./module";
import { IModule } from '../../../pages/student-course/helpers/hooks/types/res.types';
import { FType } from '../../../shared/helpers/types/f-types';

type Props = {
    modules: IModule[]
    current: IModule,
    onChangeModule: FType<IModule, void>
}

const Modules = ({modules, current, onChangeModule}:Props) => {
    return (
        <div className={'course-modules__modules'}>
            <div className={'course-modules__subtitle'}>
                <span>Модули:</span>
            </div>
            <div className={'course-modules__list'}>
                {
                    modules &&
                    modules?.map((m,i) => (
                        <Module
                            key={m.id}
                            title={`Модуль ${i + 1}.${m.title}`}
                            classNames={[
                                m.id == current?.id &&
                                'course-modules__module_current'
                            ]}
                            onClick={() => {
                                onChangeModule(m)
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Modules;