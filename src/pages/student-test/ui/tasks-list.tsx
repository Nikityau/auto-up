import React from "react";
import { observer } from "mobx-react-lite";
import { TestStore } from "../store/test-store";
import TaskNum from "./task-num";

type Props = {
  testStore: TestStore
}

const TasksList = observer(({ testStore }: Props) => {

  const setTask = (taskId: string) => {
    testStore.setCurrentTask(taskId);
  };

  return (
    <div className={"student-test__tasks-list"}>
      {
        testStore.test.tasks.map((t, i) => (
          <TaskNum
            key={t.id}
            number={i + 1}
            onClick={() => setTask(t.id)}
            isCurrent={testStore.currentTask?.id == t.id}
          />
        ))
      }
    </div>
  );
});

export default TasksList;