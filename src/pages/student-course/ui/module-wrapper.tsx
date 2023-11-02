import React, { useContext } from 'react';
import CourseModules from '../../../enteties/course-modules';
import { CourseContext } from '../provider/course-provider';

const ModuleWrapper = () => {

    const {modules, course, currentModule, onSetModule} = useContext(CourseContext)

    return (
        <CourseModules
            courseTittle={course?.title}
            currentModule={currentModule}
            modules={modules}
            onChangeModule={onSetModule}
        />
    );
};

export default ModuleWrapper;