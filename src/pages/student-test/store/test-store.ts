import { Test, TestTask } from "../data/interface";
import { testData } from "../data/test-data";
import { action, makeObservable, observable } from "mobx";

export class TestStore {
  currentTask: TestTask = null;
  test: Test = null;

  constructor() {
    makeObservable(this, {
      test: observable,
      currentTask: observable,
      setTest: action,
      setCurrentTask: action
    });

    this.test = testData;
    this.currentTask = testData.tasks[0];
  }

  setTest(test: Test) {
    this.test = test;
  }

  setCurrentTask(taskId: string) {
    this.currentTask = this.test.tasks.find(t => t.id == taskId);
  }
}

export const testStore = new TestStore();