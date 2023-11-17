import React from "react";
import TaskProvider from "./provider/task.provider";
import Description from "./ui/description";
import Code from "./ui/code";
import BackBtn from "../../feature/back-btn";

import './style/index.scss'

const Task = () => {
    return (
        <TaskProvider>
            <div className={'task-page'}>
                <div className={'task-page__container app-container'}>
                    <BackBtn/>
                    <div className={'task-page__wrapper'}>
                        <Code/>
                        <Description/>
                    </div>
                </div>
            </div>
        </TaskProvider>
    );
};

export default Task;