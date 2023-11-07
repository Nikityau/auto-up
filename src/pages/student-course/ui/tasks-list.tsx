import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import TaskCard from "../../../enteties/task-card";
import { CourseContext } from '../provider/course-provider';


type Props = {
}

const TasksList = ({  }: Props) => {

    const { tasks, course, currentLesson } = useContext(CourseContext)

    return (
        <div className={'tasks-list'}>
            {
                tasks &&
                tasks.map(t => {
                    return (
                        <Link to={`test/course/${course.id}/lesson/${currentLesson.id}/task-block/${t?.id}`}
                        key={t?.id}
                    >
                        <TaskCard
                            id={t.id}
                            title={t?.title}
                            description={t.description}
                            tasksCount={t.tasksCount}
                            solvedTasks={t.solvedTasks}
                            icon={t.icon}
                        />
                    </Link>
                    )
                })
            }
        </div>
    );
};

export default TasksList;