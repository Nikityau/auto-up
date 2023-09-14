import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TimetableMonth from '../../../feature/timetable-month';
import TimetableWeek from '../../../feature/timetable-week';
import TimetableDay from '../../../feature/timetable-day';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import { useFetchTimetable } from '../helpers/hooks/use-fetch-timetable';

type Props = {
    timetable: TimetableStore
}

const TimetableProvider = observer(({ timetable }: Props) => {

    const content = useFetchTimetable(timetable)    

    const getTimetableByType = () => {
        switch (timetable.type) {
            case "month": return <TimetableMonth  
                timetable={timetable}
                content={content}
            />
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