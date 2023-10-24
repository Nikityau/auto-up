import React from 'react';
import {testStore} from "../store/test-store";
import TaskCodeProvider from "../provider/task-code-provider";
import TaskDescriptionProvider from "../provider/task-description-provider";

const TaskSide = () => {
    return (
        <div className={'test-page__task-side'}>
            <TaskCodeProvider testStore={testStore}/>
            <TaskDescriptionProvider testStore={testStore}/>
        </div>
    );
};

export default TaskSide;