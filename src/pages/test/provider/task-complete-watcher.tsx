import React from 'react';
import {observer} from "mobx-react-lite";
import {TestStore} from "../store/test-store";
import {useTasksWatcher} from "../helpers/hooks/use-tasks-watcher";

type Props = {
    testStore: TestStore
} & React.PropsWithChildren

const TaskCompleteWatcher = observer(({testStore,children}:Props) => {

    useTasksWatcher(testStore)

    return (
        <>
            {
                children
            }
        </>
    );
});

export default TaskCompleteWatcher;