export class WeekTimetable {
    private _date: Date = null
    private _week: Date[] = null

    change(date: Date) {
        this.createWeek()
    }

    private createWeek() {

    }

    get week() {
        return this._week
    }

    init(date: Date) {
        this._date = date
        this.createWeek()
    }
}