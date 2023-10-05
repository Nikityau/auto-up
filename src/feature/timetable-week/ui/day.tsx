import React, { useContext } from "react";
import cn from "classnames";

import { WeekContext } from "../provider/week-provider";
import { toWeekDayStr } from "../../../shared/helpers/dates/to-weekday-str";

type Props = {
  date: Date
} & React.PropsWithChildren

const DayGrid = ({ date, children}:Props) => {

  const {showCurrentDay} = useContext(WeekContext)

  console.log(date);

  return (
    <div className={cn(
      'timetable-week__day',
    )}>
      <div className={'timetable-week__day-title'}>
        <span>{date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} {toWeekDayStr(date.getDay())}</span>
      </div>
      <div className={'timetable-week__day-content'}>

      </div>
    </div>
  );
};

export default DayGrid;