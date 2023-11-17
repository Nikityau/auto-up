import {nanoid} from 'nanoid';
import React from 'react'
import TimetableWeek from '../../../feature/timetable-week';
import DayGrid from '../../../feature/timetable-week/ui/day';
import DayInfo from '../../../feature/timetable-week/ui/day-info';
import {datesCompare} from '../../../shared/helpers/dates/dates-compare';
import {infosByDate} from '../../../shared/helpers/dates/info-by-date';
import {TimetableParsed} from '../helpers/hooks/use-fetch-timetable';
import NavByRole from '../../../enteties/nav-by-role';
import {accessRoutes} from '../../../shared/data/access-routes';
import CalendarLesson from "../../../feature/calendar-lesson";


type Props = {
    week: Date[]
    content: TimetableParsed
}

const Week = ({content, week}: Props) => {

    return (
        <TimetableWeek>
            {
                week.map(d => (
                    <DayGrid
                        key={nanoid()}
                        date={d}
                    >
                        {
                            content?.schedule[`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`]?.map((el, i) => (
                                <NavByRole
                                    link={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`}
                                    key={el.id}
                                    acceptableRoles={accessRoutes.lecturer}
                                    role={localStorage.getItem('user-role')}
                                >
                                    <DayInfo
                                        number={i}
                                        group={el.groupTitle}
                                        course={el.courseTitle}
                                        theme={el.theme}
                                        startTime={el.startTime}
                                        endTime={el.endTime}
                                        type={el.type}
                                    />
                                </NavByRole>
                            ))
                        }
                    </DayGrid>
                ))
            }
        </TimetableWeek>
    );
}

export default Week