import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchCourses } from '../helpers/hooks/use-fetch-course';
import CourseDocCard from '../../../enteties/course-doc-card';

const CourseList = () => {

    const courses = useFetchCourses()

    return (
        <div className='knowledge-base-page__course-list'>
            {
                courses?.map(c => (
                    <Link
                        to={`${c.id}`}
                        key={c.id}
                    >
                        <CourseDocCard
                            id={c.id}
                            preview={c.preview}
                            title={c.title}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default CourseList;