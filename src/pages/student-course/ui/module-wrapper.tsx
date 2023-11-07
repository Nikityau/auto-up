import React, { useContext } from 'react';
import CourseModules from '../../../enteties/course-modules';
import { CourseContext } from '../provider/course-provider';
import { useFetchCourse } from '../helpers/hooks/use-fetch-course';
import { useCourseInfo } from '../helpers/hooks/use-course-info';

const ModuleWrapper = () => {
    const {course} = useCourseInfo()

    return (
        <CourseModules
            courseTittle={course?.title}
            currentModule={null}
            modules={null}
            onChangeModule={null}
        />
    );
};

export default ModuleWrapper;