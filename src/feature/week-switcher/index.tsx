import React from "react";
import { observer } from "mobx-react-lite";

import Arrow from "./ui/arrow";
import WeekInfo from "./ui/week-info";
import { TimetableStore } from "../../local-store/timetable/timtetable-store";

import './style/index.scss'

type Props = {
  timetableStore: TimetableStore
}
const WeekSwitcher = observer(({timetableStore}:Props) => {
  return (
    <div className={'week-switcher'}>
      <Arrow
        onClick={() => timetableStore.prevWeek()}
      />
      <WeekInfo
        starWeek={timetableStore.week[0]}
        endWeek={timetableStore.week[timetableStore.week.length - 1]}
      />
      <Arrow
        classNames={'week-switcher__arrow_right'}
        onClick={() => timetableStore.nextWeek()}
      />
    </div>
  );
});

export default WeekSwitcher;