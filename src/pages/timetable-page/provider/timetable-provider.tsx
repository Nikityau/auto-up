import React from "react";
import {observer} from "mobx-react-lite";

import {useFetchTimetable} from "../helpers/hooks/use-fetch-timetable";

import Month from "../ui/month";
import Day from "../ui/day";
import Week from "../ui/week";

import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
    timetable: Timetable,
}

const TimetableProvider = ({timetable}: Props) => {

    const content = useFetchTimetable();

    if (timetable.type == 'month') {
        return (
            <Month
                month={timetable?.month}
                activeDate={timetable.active}
                content={content}
            />
        )
    }

    if (timetable.type == 'week') {
        return (
            <Week
                week={timetable.week}
                content={content}
            />
        )
    }

    if (timetable.type == 'day') {
        return (
           <Day
               day={timetable.day}
               content={content}
               onNext={() => timetable.nextDay()}
               onPrev={() => timetable.prevDay()}
           />
        )
    }

    return null;
};

export default observer(TimetableProvider);