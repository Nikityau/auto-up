import React from 'react';
import {observer} from "mobx-react-lite";

import {TimetableStore} from "../../local-store/timetable/timtetable-store";
import DateDay from "./ui/date-day";

import './style/index.scss'
import DaySwitcher from "./ui/day-switcher";

type Props = {
    timetable: TimetableStore
}

const DayControlPanel = observer(({timetable}:Props) => {
    return (
        <div className={'day-control-panel'}>
            <DateDay
                day={timetable.day.getDay()}
                date={timetable.day.getDate()}
            />
            <DaySwitcher
                onNext={() => timetable.nextDay()}
                onPrev={() => timetable.prevDay()}
            />
        </div>
    );
});

export default DayControlPanel;