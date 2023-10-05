import React from "react";
import { observer } from "mobx-react-lite";
import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import WeekSwitcher from "../../../feature/week-switcher";

type Props = {
  timetable: TimetableStore
}

const WeekChange = observer(({ timetable }: Props) => {

  if (timetable.type == "week") {
    return <WeekSwitcher
      timetableStore={timetable}
    />;
  }

  return null;
});

export default WeekChange;