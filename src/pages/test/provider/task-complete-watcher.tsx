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

const TaskCompleteWatcher = observer(({testStore, children, cookie, loader, error}: Props) => {

    useTasksWatcher(testStore, cookie, loader, error)

    return (
        <>
            {
                children
            }
        </>
    );
});

export default TaskCompleteWatcher;