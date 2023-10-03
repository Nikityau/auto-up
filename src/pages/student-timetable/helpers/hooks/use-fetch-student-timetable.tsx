import React, {useEffect, useState} from "react"
import {nanoid} from "nanoid"


import {Content} from "../../../../feature/timetable-month"
import {TimetableStore} from "../../../../local-store/timetable/timtetable-store"
import CalendarLesson from "../../../../feature/calendar-lesson"


type Timetable = {
    dates: Date[],
    content: Content[]
}

export const useFetchStudentTimetable = (timetable: TimetableStore) => {
    const [state, setState] = useState<Timetable>(null)

    useEffect(() => {
        const dates = [
          new Date()
        ]

        const content: Content[] = [
            {
                id: nanoid(),
                date: dates[0],
                content:
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
            },
            {
                id: nanoid(),
                date: new Date(dates[0].getFullYear(), dates[0].getMonth(), dates[0].getDate() + 1),
                content:
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
            }
        ]

        setState({
            content: content,
            dates: dates
        })
    }, [])

    return state
}