import React from "react";
import { observer } from "mobx-react-lite";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";

import TimetableInfo from "../../../enteties/timetable-info";

type Props = {
  timetableStore: TimetableStore
}

const InfoProvider = observer(({ timetableStore }: Props) => {

  if (timetableStore.type == "month") {
    return (
      <TimetableInfo/>
    );
  }

  return null;
});

export default InfoProvider;