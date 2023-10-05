import React from "react";
import { studentTimetable } from "../index";

import MonthChange from "../../../feature/month-change";
import TimetableTypes from "../../../feature/timetable-types";

import WeekChange from "../provider/week-change";
import MonthInfo from "../provider/month-info";

const Filter = () => {
  return (
    <div className={"student-timetable__filter"}>
      <MonthChange
        timetable={studentTimetable}
      />
      <TimetableTypes
        timetable={studentTimetable}
      />
      <WeekChange
        timetable={studentTimetable}
      />
      <MonthInfo
        timetable={studentTimetable}
      />
    </div>
  );
};

export default Filter;