import {nanoid} from 'nanoid';
import React, {useEffect} from 'react'
import NavByRole from '../../../enteties/nav-by-role';
import CalendarLesson from '../../../feature/calendar-lesson';
import TimetableMonth from '../../../feature/timetable-month';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';
import {accessRoutes} from '../../../shared/data/access-routes';
import {TimetableParsed} from '../helpers/hooks/use-fetch-timetable';

type Props = {
    month: Date[],
    activeDate: Date
    content: TimetableParsed
}

const Month = ({month, activeDate, content}: Props) => {

    const day = (date: Date) => {
        if (!content || !content.schedule) return null

        const specFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const lessons = content.schedule[specFormat]

        if (!lessons) {
            return null
        }

        const lesson = lessons[0]

        return (
            <NavByRole
                link={`day/${lesson.date.getFullYear()}-${lesson.date.getMonth() + 1}-${lesson.date.getDate()}`}
                key={lesson.id}
                role={localStorage.getItem('user-role')}
                acceptableRoles={accessRoutes.lecturer}
            >
                <CalendarLesson
                    id={nanoid()}
                    date={lesson.date}
                    courseTitle={lesson.courseTitle}
                    groupTitle={lesson.groupTitle}
                    theme={lesson.theme}
                    startTime={lesson.startTime}
                    endTime={lesson.endTime}
                    type={lesson.type}
                    isCurrent={true}
                    lessonPerDay={lessons.length}
                />
            </NavByRole>
        )
    }

    return (
        <TimetableMonth
            showCurrentDay={true}
            date={activeDate}
        >
            {
                month.map(d => (
                    <DateGrid
                        key={nanoid()}
                        date={d}
                    >
                        {
                            day(d)
                        }
                    </DateGrid>
                ))
            }
        </TimetableMonth>
    );
}


export default Month