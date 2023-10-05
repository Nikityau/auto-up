import React from "react";

import "./style/index.scss";
import TitleUi from "../../shared/ui/page-title";
import LessonType from "./ui/lesson-type";

type Props = {
  groupTitle: string,
  theme: string,
  timeStart: string,
  timeEnd: string
  type: "online" | "offline"
}
const DayScheduleCard = (
  {
    timeEnd,
    timeStart,
    groupTitle,
    theme,
    type
  }: Props) => {
  return (
    <div className={"day-schedule-card"}>
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