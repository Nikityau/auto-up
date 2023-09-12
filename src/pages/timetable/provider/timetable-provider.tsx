import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TimetableStore, TimetableType } from '../../../local-state/timetable/timtetable-store';
import TimetableMonth from '../../../feature/timetable-month';
import TimetableWeek from '../../../feature/timetable-week';
import TimetableDay from '../../../feature/timetable-day';

type Props = {
    timetable: TimetableStore
}

const TimetableProvider = observer(({ timetable }: Props) => {


    const getTimetableByType = () => {
        switch (timetable.type) {
            case "month": return <TimetableMonth />
            case "week": return <TimetableWeek />
            case "day": return <TimetableDay />
            default: return null
        }
    }

    return (
        <>
            {
                getTimetableByType()
            }
        </>
    );
});

export default TimetableProvider;