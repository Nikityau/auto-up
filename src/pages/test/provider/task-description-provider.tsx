import React from 'react';
import {observer} from "mobx-react-lite";

import {TestStore} from "../store/test-store";
import TaskDescription from "../../../enteties/task-description";
import cn from "classnames";

type Props = {
    testStore: TestStore
}

const TaskDescriptionProvider = observer(({testStore}: Props) => {
    return (
        <>
            <div className={cn(
                'task-status',
            )}>
                <p>
                    {testStore.currentTask?.status}
                </p>
            </div>
            {
                testStore.test &&
                <TaskDescription
                    ioData={testStore.currentTask?.ioData}
                    number={null}
                    title={testStore.currentTask?.title}
                    description={testStore.currentTask?.description}
                />
            }
        </>
    );
});

export default TaskDescriptionProvider;