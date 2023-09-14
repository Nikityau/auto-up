import React from 'react';
import CurrentMonth from './ui/current-month';
import ChangeBtns from './ui/change-bnts';
import { TimetableStore, lecturerTimetable } from '../../local-store/timetable/timtetable-store';
import { FType } from '../../shared/helpers/types/f-types';

import './style/index.scss'
import { observer } from 'mobx-react-lite';

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