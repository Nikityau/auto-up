import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { CourseStore } from "../store/course-store";
import TaskCard from "../../../enteties/task-card";
import { CourseContext } from '../provider/course-provider';


type Props = {
}

const TasksList = observer(({  }: Props) => {

    const { tasks, course, currentLesson } = useContext(CourseContext)

    return (
        <div className={'tasks-list'}>
            {
                tasks &&
                tasks.map(t => {
                    console.log('task',t);
                    

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
});

export default TasksList;