import React, {useContext} from 'react';
import TaskDescription from "../../../enteties/task-description";
import {TaskContext} from "../provider/task.provider";

const Description = () => {

    const {task} = useContext(TaskContext)

    return (
        <>
            <TaskDescription
                number={0}
                title={task?.name}
                description={task?.description}
                ioData={task?.task_images[0].image}
            />
        </>
    );
};

export default Description;