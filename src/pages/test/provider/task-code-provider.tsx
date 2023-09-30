import React from 'react';
import {observer} from "mobx-react-lite";
import {TestStore} from "../store/test-store";
import CodeEditor from "../../../enteties/code-editor";

type Props = {
    testStore: TestStore
}

const TaskCodeProvider = observer(({testStore}:Props) => {
    return (
        <>
            <CodeEditor
                code={testStore.currentTask.codeExample}
                onChange={() => {

                }}
            />
        </>
    );
});

export default TaskCodeProvider;