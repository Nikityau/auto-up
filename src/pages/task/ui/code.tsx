import React, {useContext} from 'react';
import CodeEditor from "../../../enteties/code-editor";
import {TaskContext} from "../provider/task.provider";

const Code = () => {

    const {task} = useContext(TaskContext)

    return (
        <>
            <CodeEditor
                readOnly={true}
                classNames={'task-page__code-editor'}
                code={task?.code_examples?.[0]?.code}
                onChange={null}
            />
        </>
    );
};

export default Code;