import React from "react";
import { observer } from "mobx-react-lite";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";

import TimetableInfo from "../../../enteties/timetable-info";

type Props = {
  timetable: TimetableStore
}

const MonthInfo = observer( ({timetable}:Props) => {
  if(timetable.type == 'month') {
    return <TimetableInfo/>
  }

  return null;
});

export default MonthInfo;