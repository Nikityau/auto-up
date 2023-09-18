import React from 'react';
import { observer } from 'mobx-react-lite';
import CurrentMonth from './ui/current-month';
import ChangeBtns from './ui/change-bnts';
import { TimetableStore } from '../../local-store/timetable/timtetable-store';

import './style/index.scss'

type Props = {
    timetable: TimetableStore
}

const MonthChange = observer(({timetable}:Props) => {
    return (
        <div className='month-change'>
            <CurrentMonth
                timetable={timetable}
            />
            <ChangeBtns
                timetable={timetable}
            />
        </div>
    );
});

export default MonthChange;