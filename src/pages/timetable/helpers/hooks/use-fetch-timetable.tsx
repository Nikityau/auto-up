import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

import { Content } from "../../../../feature/timetable-month"
import CalendarLesson from "../../../../feature/calendar-lesson"

import { TimetableStore } from "../../../../local-store/timetable/timtetable-store"

type Timetable = {
    dates: Date[],
    content: Content[]
}

export const useFetchTimetable = (timetable: TimetableStore) => {
    const [state, setState] = useState<Timetable>(null)

    useEffect(() => {
        const dates = [
          new Date(),
          new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2)
        ]

        const content: Content[] = [
            {
                id: nanoid(),
                date: dates[0],
                content:
                    <Link to={`day/${nanoid()}`}>
                        <CalendarLesson
                            id={nanoid()}
                            courseTitle={'python start'}
                            groupTitle={'Python 1'}
                            theme="Урок 01 - Введение в языки Pyhton"
                            startTime="19:00"
                            endTime="20:00"
                            type={'online'}
                            isCurrent={true}
                            lessonPerDay={2}
                        />
                    </Link>
            },
            {
                id: nanoid(),
                date: new Date(dates[0].getFullYear(), dates[0].getMonth(), dates[0].getDate() + 2),
                content:
                    <Link to={`day/${nanoid()}`}>
                        <CalendarLesson
                            id={nanoid()}
                            courseTitle="python pro"
                            groupTitle="python 13"
                            theme="Урок 01 - Введение в языки Pyhton"
                            startTime="11:00"
                            endTime="15:00"
                            type="offline"
                            lessonPerDay={1}
                        />
                    </Link>
            }
        ]

        setState({
            content: content,
            dates: dates
        })
    }, [])

    return state
}