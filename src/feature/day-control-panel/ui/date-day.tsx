import React from 'react';
import {toWeekDayStr} from "../../../shared/helpers/dates/to-weekday-str";

type Props = {
    day: number
    date: number
}

const DateDay = ({day, date}:Props) => {
    return (
        <div className={'day-control-panel__date'}>
            <span>
                {
                    date < 10
                        ? `0${date}`
                        : date
                }
            </span>
            <span>
                {
                    toWeekDayStr(day)
                }
            </span>
        </div>
    );
};

export default DateDay;