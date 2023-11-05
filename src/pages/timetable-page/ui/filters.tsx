import React from "react";

import MonthChange from "../../../feature/month-change";
import TimetableTypes from "../../../feature/timetable-types";

import {timetableRemake} from "../../../local-store/timetable/timetable";

import InfoProvider from "../provider/info-provider";
import WeekSwitcherProvider from "../provider/week-switcher-provider";

const Filters = () => {
  return (
    <div className="timetable-filters">
      <MonthChange
        timetable={timetableRemake}
      />
      <TimetableTypes
        timetable={timetableRemake}
      />
      <WeekSwitcherProvider
        timetableStore={timetableRemake}
      />
      <InfoProvider
        timetableStore={timetableRemake}
      />
    </div>
  );
};

export default Filters;