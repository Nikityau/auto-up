import {action, computed, makeObservable, observable} from "mobx";
import {TaskData} from "../data/interface/task.inteface";
import {TestData} from "../data/interface/test.interface";
import {testData} from "../data/test";

export class TestStore {
    currentTask: TaskData = null
    test: TestData = null
    isEnd: boolean = false

    constructor() {
        makeObservable(this, {
            currentTask: observable,
            test: observable,
            isEnd: observable,
            setTaskById: action,
            setNextTask: action,
            setTest: action,
            dispose: action,
            tasks: computed,
            taskNumber: computed,
        })

        //this.test = testData
        //this.currentTask = testData.tasks[0]
    }

    setTaskById(taskId: string) {
        this.currentTask = this.test.tasks.find(t => t.id == taskId)
    }

    get tasks() {
        if(!this.test) return null

        return this.test.tasks
    }

    get taskNumber() {
        if(!this.test) return null

        return this.tasks.findIndex(t => t.id == this.currentTask.id)
    }

    setNextTask() {
        const taskNum = this.taskNumber
        if(taskNum >= this.tasks.length - 1) {

            this.isEnd = true
            return
        } else {
            this.setTaskById(this.tasks[taskNum + 1].id)
        }
    }

    setTest(test: TestData = testData) {
        this.test = test
        this.currentTask = test.tasks[0]
    }

    dispose() {
        this.test = null
        this.currentTask = null
        this.isEnd = false
    }
}

export const testStore = new TestStore()