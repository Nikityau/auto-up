import React from "react";
import { observer } from "mobx-react-lite";
import TaskDescription from "./task-description";
import Slider from "./slider";
import CodeEditor from "../../../enteties/code-editor";

const Task = observer(() => {
  return (
    <div className={"student-test__task-field"}>
      <CodeEditor />
      <Slider/>
      <TaskDescription />
    </div>
  );
});

export default Task;