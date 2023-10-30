import React from "react";
import { observer } from "mobx-react-lite";

import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import WeekSwitcher from "../../../feature/week-switcher";

type Props = {
  timetableStore: TimetableStore
}

const WeekSwitcherProvider = observer(({ timetableStore }: Props) => {

  if(timetableStore.type == 'week') {
    return <WeekSwitcher timetableStore={timetableStore}/>
  }

  return null;
});

export default WeekSwitcherProvider;