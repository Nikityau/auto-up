import React from 'react';
import { observer } from 'mobx-react-lite';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import { toMonthStr } from '../../../shared/helpers/dates/to-month-str';

type Props = {
    timetable: TimetableStore
}

const CurrentMonth = observer(({timetable}:Props) => {
    return (
        <div className='month-change__current'>
            <span>{toMonthStr(timetable.timetable.activeDate.getMonth())} {timetable.timetable.activeDate.getFullYear()}</span>
        </div>
    );
});

export default CurrentMonth;