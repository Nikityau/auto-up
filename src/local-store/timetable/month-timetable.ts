import {eachDayOfInterval} from "date-fns";

export class MonthTimetable {
    private _date: Date = null
    private _month: Date[] = null

    change(date: Date) {
        if(date.getMonth() == this._date.getMonth()) {
            return
        }
        this._date = date
        this.createMonth()
    }

    private createMonth() {
        this._month = eachDayOfInterval({
            start: new Date(
                this._date.getFullYear(),
                this._date.getMonth(),
                1
            ),
            end: new Date(
                this._date.getFullYear(),
                this._date.getMonth() + 1,
                0
            )
        })
    }


    get month() {
        return this._month
    }

    init(date: Date) {
        this._date = date
        this.createMonth()
    }
}
