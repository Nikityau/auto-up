import React from "react";
import TestProvider from "./provider/test-provider";

import TasksList from "./ui/tasks-list";
import { testStore } from "./store/test-store";
import Task from "./ui/task";

import './style/index.scss'

const StudentTest = () => {
  return (
    <TestProvider>
      <div className={"student-test"}>
        <div className={'student-test__container app-container'}>
          <TasksList testStore={testStore}/>
          <Task/>
        </div>
      </div>
    </TestProvider>
  );
};

export default StudentTest;