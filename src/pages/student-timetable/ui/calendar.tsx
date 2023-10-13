import React from "react";
import TimetableMonth from "../../../feature/timetable-month";
import DateGrid from "../../../feature/timetable-month/ui/date-grid";
import {nanoid} from "nanoid";
import {observer} from "mobx-react-lite";

import TimetableWeek from "../../../feature/timetable-week";
import TimetableDay from "../../../feature/timetable-day";
import DayGrid from "../../../feature/timetable-week/ui/day";

import {TimetableStore} from "../../../local-store/timetable/timtetable-store";
import {useFetchStudentTimetable} from "../helpers/hooks/use-fetch-student-timetable";
import {datesCompare} from "../../../shared/helpers/dates/dates-compare";
import {infoByDate, infosByDate} from "../../../shared/helpers/dates/info-by-date";
import DayControlPanel from "../../../feature/day-control-panel";
import {Link} from "react-router-dom";
import DayScheduleCard from "../../../enteties/day-schedule-card";
import {dayTime} from "../../../feature/timetable-day/data/time";
import DayInfo from "../../../feature/timetable-week/ui/day-info";
import CalendarLesson from "../../../feature/calendar-lesson";
import {CookieStore} from "../../../local-store/cookie/cookie-store";
import {ErrorStore} from "../../../local-store/error-store";
import {LoaderStore} from "../../../local-store/loader/loader-store";

type Props = {
    timetable: TimetableStore
    cookie: CookieStore
    error: ErrorStore,
    loader: LoaderStore
}

const Calendar = observer(({timetable, cookie, loader, error}: Props) => {

            const content = useFetchStudentTimetable(timetable, cookie, loader, error);

            if (timetable.type == "month") {
                return <TimetableMonth
                    showCurrentDay={true}
                    date={timetable.timetable.activeDate}
                >
                    {
                        timetable.timetable.month.map(d => (
                            <DateGrid
                                key={nanoid()}
                                date={d}
                            >
                                {
                                    infoByDate(d, content?.dates, (d) => {
                                        const el = content.content?.find(c => datesCompare(c.date, d));

                                        return (
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
                                        );
                                    })
                                }
                            </DateGrid>
                        ))
                    }
                </TimetableMonth>;
            }

            if (timetable.type == "week") {
                return <TimetableWeek>
                    {
                        timetable.week.map(t => (
                            <DayGrid
                                key={nanoid()}
                                date={t}
                            >
                                {
                                    infosByDate(t, content?.dates, (d) => {
                                        return content?.content.filter(el => datesCompare(el.date, d)).map((el, i) => (
                                            <DayInfo
                                                key={nanoid()}
                                                number={i}
                                                group={el.groupTitle}
                                                course={el.courseTitle}
                                                theme={el.theme}
                                                startTime={el.startTime}
                                                endTime={el.endTime}
                                                type={el.type}
                                            />
                                        ));
                                    })
                                }
                            </DayGrid>
                        ))
                    }
                </TimetableWeek>;
            }

            if (timetable.type == "day") {
                return (
                    <div className={'timetable-day__wrapper'}>
                        <TimetableDay
                            ControlPanel={
                                <DayControlPanel
                                    timetable={timetable}
                                />
                            }
                        >
                            {
                                infosByDate(timetable.day, content?.dates, (d) => {
                                    return content?.content.filter(el => datesCompare(el.date, d)).map(el => (
                                        <DayScheduleCard
                                            key={nanoid()}
                                            offsetTop={(() => {
                                                const [h, min] = el.startTime.split(":");
                                                const time = dayTime.findIndex(d => {
                                                    return d.time.split(":")[0] == h;
                                                });

                                                return time * 86 + 86 * Number(min) / 60;
                                            })()}
                                            groupTitle={el.groupTitle}
                                            theme={el.theme}
                                            timeStart={el.startTime}
                                            timeEnd={el.endTime}
                                            type={el.type}
                                        />
                                    ));
                                })
                            }
                        </TimetableDay>
                    </div>
                );
            }

            return null;
        }
    )
;

export default Calendar;