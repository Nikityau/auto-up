import React, { useContext } from 'react';
import CourseModules from '../../../enteties/course-modules';
import {CourseContext} from "../provider/course-provider";
import {useCourse} from "../helpers/hooks/use-course";
import {useModules} from "../helpers/hooks/use-modules";

const ModuleWrapper = () => {
    //const {course, modules, currentModule,onSetModule} = useContext(CourseContext)

    const course = useCourse()
    const {modules, module, onSetModule} = useModules()

    return (
        <CourseModules
            courseTittle={course?.title}
            currentModule={module}
            modules={modules}
            onChangeModule={onSetModule}
        />
    );
};

export default ModuleWrapper;