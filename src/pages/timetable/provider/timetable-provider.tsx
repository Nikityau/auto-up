import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';

import TimetableMonth from '../../../feature/timetable-month';
import TimetableWeek from '../../../feature/timetable-week';
import TimetableDay from '../../../feature/timetable-day';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';

import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import { useFetchTimetable } from '../helpers/hooks/use-fetch-timetable';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';

type Props = {
    timetable: TimetableStore
}

const TimetableProvider = observer(({ timetable }: Props) => {

    const content = useFetchTimetable(timetable)

    const getInfoByDate = (date: Date): JSX.Element => {
        if (!content) return null

        for (let i = 0; i < content.length; ++i) {
            if (!content[i].content) continue

            if (datesCompare(date, content[i].date)) {
                return content[i].content
            }
        }

        return null
    }

    const getTimetableByType = () => {
        switch (timetable.type) {
            case "month":
                return (
                    <TimetableMonth
                        showCurrentDay={true}
                        date={timetable.timetable.activeDate}
                    >
                        {
                            timetable.timetable.dates.map(d => (
                                <DateGrid
                                    key={nanoid()}
                                    date={d}
                                >
                                    {
                                        getInfoByDate(d)
                                    }
                                </DateGrid>
                            ))
                        }
                    </TimetableMonth>
                )
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