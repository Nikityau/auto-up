import React from 'react';

import TasksList from "./ui/tasks-list";
import TaskSide from "./ui/task-side";
import {testStore} from "./store/test-store";
import TaskCompleteWatcher from "./provider/task-complete-watcher";

import './style/index.scss'
import {cookieStore} from "../../local-store/cookie/cookie-store";
import {errorStore} from "../../local-store/error-store";
import {loaderStore} from "../../local-store/loader/loader-store";

const Test = () => {
    return (
        <TaskCompleteWatcher testStore={testStore} cookie={cookieStore} error={errorStore} loader={loaderStore}>
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