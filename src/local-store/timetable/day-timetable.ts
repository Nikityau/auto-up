export class DayTimetable {
    private _date: Date = null

    change(date: Date) {
        const now = new Date()
        if(
            date.getMonth() != this._date.getMonth()
            && date.getMonth() == now.getMonth()
        ) {
            this._date = now

            return
        }


        this._date = date
    }

    get day() {
        return this._date
    }

    init(date: Date) {
        this._date = date
    }
}