import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { TestStore } from "../store/test-store";
import CodeEditor from "../../../enteties/code-editor";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import axios from "axios";

type Props = {
  testStore: TestStore
}

const TaskCodeProvider = observer(({ testStore }: Props) => {

  return (
    <CodeEditor
      code={''}
      onChange={() => {
      }}
    />
  );
});

export default TaskCodeProvider;