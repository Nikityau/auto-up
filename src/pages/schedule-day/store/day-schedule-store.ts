import {action, computed, makeObservable, observable} from "mobx"
import {StudentSchedule} from "../../../shared/data/interface/student-schedule.interface";

export class DayScheduleStore {
    tab: string = null
    schedule: StudentSchedule[] = null

    constructor() {
        makeObservable(this, {
            tab: observable,
            schedule: observable,
            setTab: action,
            setSchedule: action,
            setStudentStatus: action,
            students: computed,
            currentSchedule: computed,
            tasks: computed,
        })
    }

    setTab(tab: string) {
        this.tab = tab
    
        localStorage.setItem('group-tab-id', tab)
    }

    get students() {
        if (!this.schedule) return null

        return this.schedule.find((s) => s.groupId == this.tab)?.students
    }

    get currentSchedule() {
        if (!this.schedule) return null

        return this.schedule.find(s => s.groupId == this.tab)
    }

    get tasks() {
        return this.currentSchedule.tasks
    }

    setSchedule(sch: StudentSchedule[]) {
        this.schedule = sch

        const tab = localStorage.getItem('group-tab-id')
        
        this.tab = this.schedule.find(g => g.groupId == tab)?.groupId || this.schedule[0].groupId
    }

    setStudentStatus(studentId: string, status: boolean) {
        this.students.find(s => s.id == studentId).isIn = status
    }
}

export const dayScheduleStore: DayScheduleStore = new DayScheduleStore()