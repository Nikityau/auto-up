import React from 'react';
import { observer } from 'mobx-react-lite';
import CurrentMonth from './ui/current-month';
import ChangeBtns from './ui/change-bnts';
import {Timetable} from "../../local-store/timetable/timetable";

import './style/index.scss'

type Props = {
    timetable: Timetable
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