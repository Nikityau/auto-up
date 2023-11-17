import React, { useEffect } from "react";
import Students from "./ui/students";
import Schedule from "./ui/schedule";

import ScheduleDayProvider from "./provider/schedule-day.provider";
import { dayScheduleStore } from "./store/day-schedule-store";

import "./style/index.scss";

const ScheduleDay = () => {

  useEffect(() => {
    return () => {
      localStorage.removeItem('group-tab-id')
    }
  }, [])
  
  return (
    <ScheduleDayProvider
      daySchedule={dayScheduleStore}
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