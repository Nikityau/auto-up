import { eachDayOfInterval } from "date-fns";
import { action, computed, makeObservable, observable } from "mobx";
import { datesCompare } from "../../shared/helpers/dates/dates-compare";

export type TimetableType = "month" | "week" | "day"

type Timetable = {
  now: Date,
  activeDate: Date;
  month: Date[],
  week: Date[],
  day: Date
}

export class TimetableStore {
  type: TimetableType = "month";
  timetable: Timetable = {
    now: null,
    activeDate: null,
    month: null,
    week: null,
    day: null
  };
  who: string = "";

  constructor(who: string) {
    makeObservable(this, {
      type: observable,
      timetable: observable,
      who: observable,
      setType: action,
      nextMonth: action,
      prevMonth: action,
      prevWeek: action,
      nextWeek: action,
      nextDay: action,
      prevDay: action,
      week: computed,
      month: computed,
      day: computed
    });

    this.who = localStorage.getItem('user-role');

    const localType = sessionStorage.getItem(`${this.who}-month-type`);

    if (localType) {
      this.type = localType as TimetableType;
    }

    const now = new Date();

    this.timetable.now = now;
    this.timetable.activeDate = now;
    this.timetable.week = [];
    this.setMonth(
      now
    );
    try {
      this.initWeek();
    } catch(e) {
      console.error(e);
    }
    this.timetable.day = new Date(now);
  }

  initWeek() {
    const index = this.month.findIndex(d => datesCompare(this.timetable.now, d))

    const len = this.month.length

    let startIndex = 0;
    let endIndex = 0;

    if(index < this.month.length - 7) {      
      startIndex = index
      endIndex = index + 6
    } else {
      startIndex = index
      endIndex = len - 1
    }
    
    this.setWeek(
      this.timetable.month[startIndex],
      this.timetable.month[endIndex]
    );
  }

  setType(type: TimetableType) {
    this.type = type;
    sessionStorage.setItem(`${this.who}-month-type`, type);
  }

  nextMonth() {
    this.timetable.activeDate = new Date(
      this.timetable.activeDate.getFullYear(),
      this.timetable.activeDate.getMonth() + 1
    );
    this.setMonth(
      this.timetable.activeDate
    );
    this.setWeek(
      this.month[0],
      this.month[6]
    );
    this.setDay(this.month[0])
  }

  prevMonth() {
    this.timetable.activeDate = new Date(
      this.timetable.activeDate.getFullYear(),
      this.timetable.activeDate.getMonth() - 1
    );
    this.setMonth(
      this.timetable.activeDate
    );
    this.setWeek(
      this.month[this.month.length - 1 - 6],
      this.month[this.month.length - 1]
    );
    this.setDay(this.month[this.month.length - 1])
  }

  prevWeek() {
    const date = this.week[0];

    const indexInMonth = this.month.findIndex(d => datesCompare(d, date));
    if (indexInMonth == 0) {
      this.prevMonth();

      return;
    }
    if (indexInMonth > 6) {
      this.setWeek(
        this.month[indexInMonth - 7],
        this.month[indexInMonth - 1]
      );

      return;
    }

    this.setWeek(
      this.month[0],
      this.month[6 - indexInMonth]
    );
  }

  nextWeek() {
    const date = this.week[this.week.length - 1];

    const indexInMonth = this.month.findIndex(d => datesCompare(d, date));

    if (indexInMonth == (this.month.length - 1)) {
      this.nextMonth();

      return;
    }
    if (indexInMonth < this.month.length - 1 - 6) {
      this.setWeek(
        this.month[indexInMonth + 1],
        this.month[indexInMonth + 7]
      );

      return;
    }

    this.setWeek(
      this.month[indexInMonth + 1],
      this.month[this.month.length - 1]
    );
  }

  nextDay() {
    const dIndex = this.month.findIndex(d => datesCompare(d, this.day))

    if(dIndex == this.month.length - 1) {
      this.nextMonth()
    } else {
      this.setDay(this.month[dIndex + 1])
    }
  }
  prevDay() {
    const dIndex = this.month.findIndex(d => datesCompare(d, this.day))

    if(dIndex == 0) {
      this.prevMonth()
    } else {
      this.setDay(this.month[dIndex - 1])
    }
  }

  get month() {
    return this.timetable.month;
  }

  get week() {
    return this.timetable.week;
  }

  get day() {
    return this.timetable.day;
  }

  private setWeek(from: Date, to: Date) {
    this.timetable.week = eachDayOfInterval({
      start: from,
      end: to
    });
  }

  private setMonth(date: Date) {
    this.timetable.month = eachDayOfInterval({
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    });
  }

  private setDay(date: Date) {
    this.timetable.day = date
  }
}

export const lecturerTimetable = new TimetableStore("");