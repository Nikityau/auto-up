import {Subject} from "rxjs";
import {action, computed, makeObservable, observable} from "mobx";

import {MonthTimetable} from "./month-timetable";
import {WeekTimetable} from "./week-timetable";
import {DayTimetable} from "./day-timetable";

export type TimetableType = 'month' | 'week' | 'day'

export class Timetable {
    now: Date = null
    active: Date = null
    type: TimetableType = 'month'

    _month: Date[] = null
    _week: Date[] = null
    _day: Date = null

    monthController: MonthTimetable = new MonthTimetable()
    weekController: WeekTimetable = new WeekTimetable()
    dayController: DayTimetable = new DayTimetable()

    dateObservable = new Subject<Date>()

    constructor() {
        this.now = new Date()
        this.active = this.now

        this.monthController.init(this.now)
        this.weekController.init(this.now)
        this.dayController.init(this.now)

        this._month = this.monthController.month
        this._week = this.weekController.week
        this._day = this.dayController.day

        makeObservable(this, {
            type: observable,
            now: observable,
            active: observable,
            _month: observable,
            _week: observable,
            _day: observable,
            changeType: action,
            nextMonth: action,
            prevMonth: action,
            nextDay: action,
            prevDay: action,
            month: computed,
        })

        this.dateObservable.subscribe({
            next: (date: Date) => {
                this.monthController.change(date)
                this.weekController.change(date)
                this.dayController.change(date)
            }
        })
    }

    get month(): Date[] {
        return this._month
    }

    get day():Date {
        return this._day
    }

    private setDates() {
        this._month = this.monthController.month
        this._week = this.weekController.week
        this._day = this.dayController.day
    }

    changeType(type: TimetableType) {
        this.type = type
    }

    nextMonth() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth() + 1,
        )
        this.dateObservable.next(this.active)
        this.setDates()
    }

    prevMonth() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth() - 1,
        )
        this.dateObservable.next(this.active)
        this.setDates()
    }
    nextWeek() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth(),
            this.active.getDate() + 7,
        )
        this.dateObservable.next(this.active)
        this._week = this.weekController.week
    }
    prevWeek() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth(),
            this.active.getDate() - 7,
        )
        this.dateObservable.next(this.active)
        this._week = this.weekController.week
    }


    nextDay() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth(),
            this.active.getDate() + 1
        )
        this.dateObservable.next(this.active)
        this.setDates()
    }

    prevDay() {
        this.active = new Date(
            this.active.getFullYear(),
            this.active.getMonth(),
            this.active.getDate() - 1
        )
        this.dateObservable.next(this.active)
        this.setDates()
    }
}

export const timetableRemake = new Timetable()
