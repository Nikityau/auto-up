import { eachDayOfInterval } from "date-fns";
import { action, computed, makeObservable, observable } from "mobx";
import { datesCompare } from "../../shared/helpers/dates/dates-compare";

export type TimetableType = "month" | "week" | "day"

function decorator(value: boolean) {
  return (target: any, propKey: string, descriptor: PropertyDescriptor) => {
    console.log("here");
  };
}

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
      week: computed,
      month: computed,
      day: computed
    });

    this.who = who;

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
    this.setWeek(
      this.timetable.month[0],
      this.timetable.month[6]
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
        this.month[0],
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
      this.month[this.month.length - 1 - (this.month.length - 1 - indexInMonth)]
    );
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
}

export const lecturerTimetable = new TimetableStore("lecturer");