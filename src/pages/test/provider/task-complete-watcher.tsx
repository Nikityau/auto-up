import React from 'react';
import {observer} from "mobx-react-lite";
import {TestStore} from "../store/test-store";
import {useTasksWatcher} from "../helpers/hooks/use-tasks-watcher";
import {ErrorStore} from "../../../local-store/error-store";
import {LoaderStore} from "../../../local-store/loader/loader-store";
import {CookieStore} from "../../../local-store/cookie/cookie-store";

type Props = {
    testStore: TestStore
    error: ErrorStore,
    loader: LoaderStore,
    cookie: CookieStore
} & React.PropsWithChildren

export const TaskContext = React.createContext(null)

const TaskCompleteWatcher = observer(({testStore, children, cookie, loader, error}: Props) => {

    const {onChangeCode} = useTasksWatcher(testStore, cookie, loader, error)

    return (
        <TaskContext.Provider value={{
            onChangeCode
        }}>
            {
                children
            }
        </TaskContext.Provider>
    );
});

export default TaskCompleteWatcher;