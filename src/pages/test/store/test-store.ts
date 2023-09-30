import {action, computed, makeObservable, observable} from "mobx";
import {TaskData} from "../data/interface/task.inteface";
import {TestData} from "../data/interface/test.interface";
import {testData} from "../data/test";
import {th} from "date-fns/locale";

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
            tasks: computed,
            taskNumber: computed,
        })

        this.test = testData
        this.currentTask = testData.tasks[0]
    }

    setTaskById(taskId: string) {
        this.currentTask = this.test.tasks.find(t => t.id == taskId)
    }

    get tasks() {
        return this.test.tasks
    }

    get taskNumber() {
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
}

export const testStore = new TestStore()