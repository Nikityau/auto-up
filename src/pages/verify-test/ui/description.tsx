import React, {useContext} from 'react';
import TaskDescription from "../../../enteties/task-description";
import {VerifyContext} from "../provider/verify.provider";

const Description = () => {

    const {task} = useContext(VerifyContext)

    return (
        <>
            <TaskDescription
                number={task?.id}
                description={task?.description}
                title={task?.name}
                ioData={task?.task_images?.[0]?.image}
            />
        </>
    );
};

export default Description;