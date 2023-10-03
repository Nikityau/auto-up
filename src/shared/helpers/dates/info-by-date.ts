import { FType } from "../types/f-types";
import { datesCompare } from "./dates-compare";

export const infoByDate = (date: Date, dates: Date[], cb: FType<Date, any>) => {
  if(!dates) return null

  for(let d of dates) {
    if(datesCompare(d, date)) {
      return cb(d)
    }
  }
}