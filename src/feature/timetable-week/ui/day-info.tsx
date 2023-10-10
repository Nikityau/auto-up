import React from "react";
import LessonType from "../../../enteties/day-schedule-card/ui/lesson-type";

type Props = {
  group: string,
  course: string,
  theme: string
  startTime: string,
  endTime: string,
  type: 'offline' | 'online'
}

const DayInfo = (
  {
    type,
    group,
    course,
    endTime,
    theme,
    startTime
  }:Props) => {
  return (
    <div className={'day-info'}>
      <div className={'day-info__title'}>
        <span>Группа {group}</span>
        <span>Курс: {course}</span>
      </div>
      <div className={'day-info__theme'}>
        <span>{theme}</span>
      </div>
      <div className={'day-info__line'}/>
      <div className={'day-info__container'}>
        <div className={'day-info__time'}>
          <span>{startTime} - {endTime}</span>
          <span>Посещаемость</span>
        </div>
        <LessonType type={type}/>
      </div>
    </div>
  );
};

export default DayInfo;