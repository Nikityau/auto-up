import React from "react";

type Props = {
  starWeek: Date,
  endWeek: Date
}

const WeekInfo = ({endWeek, starWeek}:Props) => {

  const dText = (num: number) => {
    if(num < 10) {
      return `0${num}`
    }

    return num
  }

  return (
    <div className={'week-switcher__week-info'}>
      <span>
        {`${dText(starWeek.getDate())}.${dText(starWeek.getMonth())}. `}
        —
        {` ${dText(endWeek.getDate())}.${dText(endWeek.getMonth())}.`}
      </span>
    </div>
  );
};

export default WeekInfo;