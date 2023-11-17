import React, {Children} from "react";
import cn from "classnames";

import {toWeekDayStr} from "../../../shared/helpers/dates/to-weekday-str";

type Props = {
    date: Date
} & React.PropsWithChildren

import monday_img from '../assets/monday.png'
import tuesday_img from '../assets/thusday.png'
import wednesday_img from '../assets/wednesday.png'
import thursday_img from '../assets/thursday.png'
import friday_img from '../assets/friday.png'
import saturday_img from '../assets/saturday.png'
import sunday_img from '../assets/sunday.png'

const DayGrid = ({date, children}: Props) => {

    const imgByDay = (day: number) => {
        switch (day) {
            case 0:
                return sunday_img
            case 1:
                return monday_img
            case 2:
                return tuesday_img
            case 3:
                return wednesday_img
            case 4:
                return thursday_img
            case 5:
                return friday_img
            case 6:
                return saturday_img
        }
    }

    return (
        <div className={cn(
            'timetable-week__day',
        )}
             style={{
                 gridRowEnd: `span ${Children.count(children)}`
             }}
        >
            <div className={'timetable-week__day-title'}>
                <span>{date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} {toWeekDayStr(date.getDay())}</span>
            </div>
            <div className={cn(
                'timetable-week__day-content',
                !Children.count(children) && 'timetable-week__day-content_empty'
            )}>
                {
                    Children.count(children)
                        ? children
                        : <img src={imgByDay(date.getDay())} alt={'day img'}/>
                }
            </div>
        </div>
    );
};

export default DayGrid;