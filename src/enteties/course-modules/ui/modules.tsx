import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../../../pages/student-course/store/course-store";
import Module from "./module";


type Props = {
    course: CourseStore
}

const Modules = observer(({course}:Props) => {
    return (
        <div className={'course-modules__modules'}>
            <div className={'course-modules__subtitle'}>
                <span>Модули:</span>
            </div>
            <div className={'course-modules__list'}>
                {
                    course.modules.map((m,i) => (
                        <Module
                            key={m.id}
                            title={`Модуль ${i + 1}.${m.title}`}
                            classNames={[
                                m.id == course.currentModule.id &&
                                'course-modules__module_current'
                            ]}
                            onClick={() => {
                                course.setModule(m.id)
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
});

export default Modules;