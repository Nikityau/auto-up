import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";

import {useFetchTimetable} from "../helpers/hooks/use-fetch-timetable";

import {LoaderStore} from "../../../local-store/loader/loader-store";

import Month from "../ui/month";
import Week from "../ui/week";
import Day from "../ui/day";
import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
    timetable: Timetable,
    loaderStore: LoaderStore
}

const TimetableProvider = ({timetable, loaderStore}: Props) => {

    const content = useFetchTimetable(loaderStore);

    if (timetable.type == 'month') {
        return (
            <Month
                month={timetable?.month || []}
                activeDate={timetable.active}
                content={content}
            />
        )
    }

    if (timetable.type == 'week') {
        return (
            <div>
                week
            </div>
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