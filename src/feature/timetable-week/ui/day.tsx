import React from "react";

type Props = {
  date: number,
  day: string,
} & React.PropsWithChildren

const DayGrid = ({day, date, children}:Props) => {
  return (
    <div className={'timetable-week__day'}>
      <div className={'timetable-week__day-title'}>
        <span>{date < 10 ? `0${date}` : date} {day}</span>
      </div>
      <div className={'timetable-week__day-content'}>

      </div>
    </div>
  );
};

export default DayGrid;