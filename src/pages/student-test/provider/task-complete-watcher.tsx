import React from 'react';
import {observer} from "mobx-react-lite";
import {TestStore} from "../store/test-store";
import {useTasksWatcher} from "../helpers/hooks/use-tasks-watcher";

type Props = {
    testStore: TestStore
} & React.PropsWithChildren

export const TaskContext = React.createContext(null)

const TaskCompleteWatcher = observer(({testStore, children, }: Props) => {

    const {onChangeCode, onSendSolution} = useTasksWatcher(testStore)

    return (
        <TaskContext.Provider value={{
            onChangeCode,
            onSendSolution
        }}>
            {
                children
            }
        </TaskContext.Provider>
    );
});

export default TaskCompleteWatcher;