import React from 'react';
import {observer} from "mobx-react-lite";
import {CourseStore} from "../store/course-store";
import TaskCard from "../../../enteties/task-card";

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
                    <TaskCard
                        key={t.id}
                        title={t.title}
                        description={t.description}
                        tasksCount={t.tasksCount}
                        solvedTasks={t.solvedTasks}
                        icon={t.icon}
                    />
                ))
            }
        </div>
    );
});

export default TasksList;