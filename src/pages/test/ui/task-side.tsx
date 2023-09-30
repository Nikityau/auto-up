import React from 'react';
import {testStore} from "../store/test-store";
import TaskCodeProvider from "../provider/task-code-provider";
import TaskDescriptionProvider from "../provider/task-description-provider";
import Wrapper from "./wrapper";

const TaskSide = () => {
    return (
        <div className={'test-page__task-side'}>
            <TaskCodeProvider testStore={testStore}/>
            <TaskDescriptionProvider testStore={testStore}/>
            <Wrapper/>
        </div>
    );
};

export default TaskSide;