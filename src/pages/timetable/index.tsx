import React from "react";
import Filters from "./ui/filters";

import TimetableProvider from "./provider/timetable-provider";

import TitleUi from "../../shared/ui/page-title";

import { lecturerTimetable } from "../../local-store/timetable/timtetable-store";
import { cookieStore } from "../../local-store/cookie/cookie-store";
import { loaderStore } from "../../local-store/loader/loader-store";

import "./style/index.scss";

const Timetable = () => {
  return (
    <div className="timetable-page">
      <div className="timetable-page__container app-container">
        <TitleUi
          title="Расписание"
        />
        <div className="timetable-page__tt-zone">
          <Filters />
          <TimetableProvider
            loaderStore={loaderStore}
            cookieStore={cookieStore}
            timetable={lecturerTimetable}
          />
        </div>
      </div>
    </div>
  );
};

export default Timetable;
