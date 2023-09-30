import React from 'react';

import TasksList from "./ui/tasks-list";
import TaskSide from "./ui/task-side";
import {testStore} from "./store/test-store";
import TaskCompleteWatcher from "./provider/task-complete-watcher";

import './style/index.scss'

const Test = () => {
    return (
        <TaskCompleteWatcher testStore={testStore}>
            <div className={'test-page'}>
                <div className={'test-page__container app-container'}>
                    <TasksList testStore={testStore}/>
                    <TaskSide/>
                </div>
            </div>
        </TaskCompleteWatcher>
    );
};

export default Test;