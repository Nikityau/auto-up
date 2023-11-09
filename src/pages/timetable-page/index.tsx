import React from "react";
import Filters from "./ui/filters";

import TimetableProvider from "./provider/timetable-provider";
import {timetableRemake} from "../../local-store/timetable/timetable";

import TitleUi from "../../shared/ui/page-title";

import "./style/index.scss";

const TimetablePage = () => {
  return (
    <div className="timetable-page">
      <div className="timetable-page__container app-container">
        <TitleUi
          title="Расписание"
        />
        <div className="timetable-page__tt-zone">
          <Filters />
          <TimetableProvider
            timetable={timetableRemake}
          />
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
