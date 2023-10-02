import React from 'react';
import {observer} from "mobx-react-lite";

import TaskDescription from "../../../enteties/task-description";
import {TestStore} from "../store/test-store";

type Props = {
    testStore: TestStore
}

const TaskDescriptionProvider = observer(({testStore}:Props) => {
    return (
        <>
          {
            testStore.test &&
            <TaskDescription
              number={testStore.taskNumber + 1}
              tips={testStore.currentTask.tips}
              description={testStore.currentTask.description}
              title={testStore.currentTask.title}
              ioData={testStore.currentTask.ioData}
            />
          }
        </>
    );
});

export default TaskDescriptionProvider;