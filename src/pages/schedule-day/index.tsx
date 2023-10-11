import React from "react";
import Students from "./ui/students";
import Schedule from "./ui/schedule";

import ScheduleDayProvider from "./provider/schedule-day.provider";
import { cookieStore } from "../../local-store/cookie/cookie-store";
import { dayScheduleStore } from "./store/day-schedule-store";
import { loaderStore } from "../../local-store/loader/loader-store";

import "./style/index.scss";

const ScheduleDay = () => {
  return (
    <ScheduleDayProvider
      cookie={cookieStore}
      daySchedule={dayScheduleStore}
      loader={loaderStore}
    >
      <div className="schedule-day">
        <div className="schedule-day__container app-container">
          <Schedule />
          <Students />
        </div>
      </div>
    </ScheduleDayProvider>
  );
};

export default ScheduleDay;