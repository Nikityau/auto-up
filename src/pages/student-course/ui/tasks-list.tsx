import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../store/course-store";
import TaskCard from "../../../enteties/task-card";
import {Link} from "react-router-dom";

type Props = {
    course: CourseStore
}

const TasksList = observer(({course}:Props) => {
    return (
        <div className={'tasks-list'}>
            {
                !course.tasks
                    ? "null"
                    :
                course.tasks.map(t => (
                   <Link to={`test/${t.id}`}
                         key={t.id}
                   >
                       <TaskCard
                           title={t.title}
                           description={t.description}
                           tasksCount={t.tasksCount}
                           solvedTasks={t.solvedTasks}
                           icon={t.icon}
                       />
                   </Link>
                ))
            }
        </div>
    );
});

export default TasksList;