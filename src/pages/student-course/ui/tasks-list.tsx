import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import TaskCard from "../../../enteties/task-card";
import {useTasks} from "../helpers/hooks/use-tasks";
import {useCourse} from "../helpers/hooks/use-course";
import {useLessons} from "../helpers/hooks/use-lessons";


type Props = {
}

const TasksList = ({  }: Props) => {
    const tasks = useTasks()
    const course = useCourse()
    const {lesson} = useLessons()

    return (
        <div className={'tasks-list'}>
            {
                tasks &&
                tasks.map(t => {
                    return (
                        <Link to={`test/course/${course.id}/lesson/${lesson.id}/task-block/${t?.id}`}
                        key={t?.id}
                    >
                        <TaskCard
                            id={t.id}
                            title={t?.title}
                            description={t.description}
                            tasksCount={t.tasksCount}
                            solvedTasks={t.solvedTasks}
                            icon={null}
                        />
                    </Link>
                    )
                })
            }
        </div>
    );
};

export default TasksList;