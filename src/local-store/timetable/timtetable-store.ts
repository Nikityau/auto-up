import { eachDayOfInterval } from "date-fns"
import { action, makeObservable, observable } from "mobx"

export type TimetableType = 'month' | 'week' | 'day'

type Timetable = {
    now: Date,
    activeDate: Date;
    dates: Date[]
}

export class TimetableStore {
    type: TimetableType = 'month'
    timetable: Timetable = {
        now: null,
        activeDate: null,
        dates: null
    }
    who: string = ""

    constructor(who: string) {
        makeObservable(this, {
            type: observable,
            timetable: observable,
            who: observable,
            setType: action,
            nextMonth: action,
            prevMonth: action,
        })

        this.who = who

        const localType = sessionStorage.getItem(`${this.who}-month-type`)

        if(localType) {
            this.type = localType as TimetableType
        }

        const now = new Date()

        this.timetable.now = now
        this.timetable.activeDate = now
        this.timetable.dates = eachDayOfInterval({
            start: new Date(now.getFullYear(), now.getMonth(), 1),
            end: new Date(now.getFullYear(), now.getMonth() + 1, 0)
        })
    }

    setType(type: TimetableType) {
        this.type = type
        sessionStorage.setItem(`${this.who}-month-type`, type)
    }


    nextMonth() {
        this.timetable.activeDate = new Date(
            this.timetable.activeDate.getFullYear(),
            this.timetable.activeDate.getMonth() + 1,
            )

        const aD = this.timetable.activeDate

        this.timetable.dates = eachDayOfInterval({
            start: new Date(aD.getFullYear(), aD.getMonth(), 1),
            end: new Date(aD.getFullYear(), aD.getMonth() + 1, 0)
        })
        
    }
    prevMonth() {
        this.timetable.activeDate = new Date(
            this.timetable.activeDate.getFullYear(),
            this.timetable.activeDate.getMonth() - 1,
            )

        const aD = this.timetable.activeDate

        this.timetable.dates = eachDayOfInterval({
            start: new Date(aD.getFullYear(), aD.getMonth(), 1),
            end: new Date(aD.getFullYear(), aD.getMonth() + 1, 0)
        })
    }
}

export const lecturerTimetable = new TimetableStore('lecturer')