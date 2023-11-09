import {datesCompare} from "../../shared/helpers/dates/dates-compare";
import {eachDayOfInterval} from "date-fns";

export class WeekTimetable {
    private _date: Date = null
    private _week: Date[] = null

    change(date: Date) {
        if (this.isIn(date)) return

        this._date = date

        this.createWeek()
    }

    private createWeek() {
        this._week = eachDayOfInterval({
            start: new Date(this._date),
            end: new Date(
                this._date.getFullYear(),
                this._date.getMonth(),
                this._date.getDate() + 6
            ),
        })
    }

    private isIn(date: Date): boolean {
        if (!this._week) return false

        return Boolean(this._week.find(d => datesCompare(d, date)))
    }

    get week() {
        return this._week
    }

    init(date: Date) {
        this._date = date
        this.createWeek()
    }
}