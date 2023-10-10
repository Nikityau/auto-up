import React from "react";
import TaskSquare from "../task-square";
import InfoBlock from "../info-block";

import './style/index.scss'

const TimetableInfo = () => {
  return (
    <InfoBlock
      title={
        <span className={"type-lessons__title"}>
            Информация
          </span>
      }
      classNames={[
        "type-lessons"
      ]}
    >
      <div className={"type-lessons__container"}>
        <TaskSquare
          type={"right"}
          text={"Онлайн"}
        />
        <TaskSquare
          type={"not_solve"}
          text={"Очно"}
        />
      </div>
    </InfoBlock>
  );
};

export default TimetableInfo;