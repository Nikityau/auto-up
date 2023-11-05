import React from 'react';
import { observer } from 'mobx-react-lite';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import { toMonthStr } from '../../../shared/helpers/dates/to-month-str';
import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
    timetable: Timetable
}

const CurrentMonth = observer(({timetable}:Props) => {
    return (
        <div className='month-change__current'>
            <span>{toMonthStr(timetable.active.getMonth())} {timetable.active.getFullYear()}</span>
        </div>
    );
});

export default CurrentMonth;