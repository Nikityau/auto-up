import React from "react";
import { observer } from "mobx-react-lite";

import TimetableInfo from "../../../enteties/timetable-info";
import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
  timetableStore: Timetable
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