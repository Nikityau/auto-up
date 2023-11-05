import { nanoid } from 'nanoid';
import React from 'react'
import NavByRole from '../../../enteties/nav-by-role';
import CalendarLesson from '../../../feature/calendar-lesson';
import TimetableMonth from '../../../feature/timetable-month';
import DateGrid from '../../../feature/timetable-month/ui/date-grid';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';
import { infoByDate } from '../../../shared/helpers/dates/info-by-date';
import { accessRoutes } from '../../../shared/data/access-routes';
import { TimetableParsed } from '../helpers/hooks/use-fetch-timetable';

type Props = {
    month: Date[],
    activeDate: Date
    content: TimetableParsed
}

const Month = ({month, activeDate,content}:Props) => {
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
                            infoByDate(d, content?.dates, (d) => {
                                const el = content.content?.find(c => datesCompare(c?.date, d));

                                return (
                                    <NavByRole
                                        link={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`}
                                        key={el.id}
                                        role={localStorage.getItem('user-role')}
                                        acceptableRoles={accessRoutes.lecturer}
                                    >
                                        <CalendarLesson
                                            id={nanoid()}
                                            date={el.date}
                                            courseTitle={el.courseTitle}
                                            groupTitle={el.groupTitle}
                                            theme={el.theme}
                                            startTime={el.startTime}
                                            endTime={el.endTime}
                                            type={el.type}
                                            isCurrent={true}
                                            lessonPerDay={el.lessonPerDay}
                                        />
                                    </NavByRole>
                                );
                            })
                        }
                    </DateGrid>
                ))
            }
        </TimetableMonth>
    );
}


export default Month