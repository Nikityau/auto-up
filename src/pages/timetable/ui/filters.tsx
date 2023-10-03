import React from "react";

import MonthChange from "../../../feature/month-change";
import TimetableTypes from "../../../feature/timetable-types";

import { lecturerTimetable } from "../../../local-store/timetable/timtetable-store";

import InfoProvider from "../provider/info-provider";
import WeekSwitcherProvider from "../provider/week-switcher-provider";

const Filters = () => {
  return (
    <div className="timetable-filters">
      <MonthChange
        timetable={lecturerTimetable}
      />
      <TimetableTypes
        timetable={lecturerTimetable}
      />
      <WeekSwitcherProvider
        timetableStore={lecturerTimetable}
      />
      <InfoProvider
        timetableStore={lecturerTimetable}
      />
    </div>
  );
};

export default Filters;