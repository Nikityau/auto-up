import React from 'react';
import {observer} from "mobx-react-lite";

import DateDay from "./ui/date-day";
import DaySwitcher from "./ui/day-switcher";

import './style/index.scss'
import {FType} from "../../shared/helpers/types/f-types";

type Props = {
    day: Date,
    onNext: FType<void, void>
    onPrev: FType<void, void>
}

const DayControlPanel = observer((
    {
        day,
        onNext,
        onPrev
    }:Props) => {
    return (
        <div className={'day-control-panel'}>
            <DateDay
                day={day.getDay()}
                date={day.getDate()}
            />
            <DaySwitcher
                onNext={onNext}
                onPrev={onPrev}
            />
        </div>
    );
});

export default DayControlPanel;