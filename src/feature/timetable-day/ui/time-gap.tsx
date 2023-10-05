import React from "react";

type Props = {
  time: string
}

const TimeGap = ({time}:Props) => {
  return (
    <div className={'time-gap'}>
      <div className={'time-gap__time'}>
        <span>{time}</span>
      </div>
      <div className={'time-gap__lines'}></div>
    </div>
  );
};

export default TimeGap;