import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { Content } from "../../../../feature/timetable-month"
import { TimetableStore } from "../../../../local-store/timetable/timtetable-store"
import CalendarLesson from "../../../../feature/calendar-lesson"
import { Link } from "react-router-dom"

export const useFetchTimetable = (timetable: TimetableStore) => {
    const [state, setState] = useState<Content[]>(null)

    useEffect(() => {
        const content: Content[] = [
            {
                id: nanoid(),
                date: new Date(),
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
                            lessonPerDay={10000}
                        />
                    </Link>
            },
            {
                id: nanoid(),
                date: new Date(2023, 8, 1),
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
                            lessonPerDay={500}
                        />
                    </Link>
            }
        ]

        setState(content)
    }, [])

    return state
}