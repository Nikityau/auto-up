import React from "react";

import TitleUi from "../../shared/ui/page-title";
import LessonType from "./ui/lesson-type";

import "./style/index.scss";

type Props = {
  groupTitle: string,
  theme: string,
  timeStart: string,
  timeEnd: string
  type: "online" | "offline",
  offsetTop: number
}
const DayScheduleCard = (
  {
    timeEnd,
    timeStart,
    groupTitle,
    theme,
    type,
    offsetTop
  }: Props) => {
  return (
    <div className={"day-schedule-card"}
      style={{
        transform: `translate(0, ${offsetTop}px)`
      }}
    >
      <div className={"day-schedule-card__left-side"}>
        <TitleUi title={groupTitle} />
        <TitleUi title={theme}/>
      </div>
      <div className={"day-schedule-card__right-side"}>
        <TitleUi title={`${timeStart} — ${timeEnd}`}/>
        <LessonType type={type}/>
      </div>
    </div>
  );
};

export default DayScheduleCard;