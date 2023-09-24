import { action, computed, makeObservable, observable } from "mobx"
import {StudentSchedule} from "../../../shared/data/interface/student-schedule.interface";
import {studentSchedule} from "../../../shared/data/student-schedule";

export class DayScheduleStore {
    tab: string = null
    schedule: StudentSchedule[] = null

    constructor() {
        makeObservable(this, {
            tab: observable,
            schedule: observable,
            setTab: action,
            students: computed,
            currentSchedule: computed,
            tasks: computed
        })

        this.schedule = studentSchedule
        this.tab = this.schedule[0]?.id || null
    }

    setTab(tab: string) {
        this.tab = tab
    }

    get students() {
        return this.schedule.find((s) => s.id == this.tab)?.students
    }

    get currentSchedule() {
        return this.schedule.find(s => s.id == this.tab)
    }

    get tasks() {
        return this.currentSchedule.tasks
    }

    setStudentStatus(studentId: string, status: boolean) {
        this.schedule
            .find(s => s.id == this.tab)
            .students.find(s => s.id == studentId).isIn = status
    }
}

export const dayScheduleStore: DayScheduleStore = new DayScheduleStore()