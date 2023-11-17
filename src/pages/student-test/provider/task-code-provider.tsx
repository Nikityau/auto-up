import React, {useContext, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { TestStore } from "../store/test-store";
import CodeEditor from "../../../enteties/code-editor";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import axios from "axios";
import {TaskContext} from "./task-complete-watcher";

type Props = {
  testStore: TestStore
}

const TaskCodeProvider = observer(({ testStore }: Props) => {

    const {onChangeCode} = useContext(TaskContext)

  return (
    <CodeEditor
      code={testStore.currentTask?.user_code || testStore.currentTask?.code_example}
      readOnly={
        testStore.currentTask?.status == 'approved'
      }
      onChange={(value) => {
          onChangeCode(value)
      }}
    />
  );
});

export default TaskCodeProvider;