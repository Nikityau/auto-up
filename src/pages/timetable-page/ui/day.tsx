import React from 'react'
import DayControlPanel from '../../../feature/day-control-panel';
import TimetableDay from '../../../feature/timetable-day';
import { infosByDate } from '../../../shared/helpers/dates/info-by-date';
import { TimetableParsed } from '../helpers/hooks/use-fetch-timetable';
import { TimetableStore } from '../../../local-store/timetable/timtetable-store';
import DayScheduleCard from '../../../enteties/day-schedule-card';
import { datesCompare } from '../../../shared/helpers/dates/dates-compare';
import NavByRole from '../../../enteties/nav-by-role';
import { accessRoutes } from '../../../shared/data/access-routes';
import { dayTime } from '../../../feature/timetable-day/data/time';

type Props = {
    timetable: TimetableStore,
    content: TimetableParsed
}

const Day = ({ content, timetable }: Props) => {
    return (
        <div className={"timetable-day__wrapper"}>
            <TimetableDay
                ControlPanel={
                    <DayControlPanel
                        timetable={timetable}
                    />
                }
            >
                {
                    infosByDate(timetable.day, content?.dates, (d) => {
                        return content?.content.filter(el => datesCompare(el?.date, d)).map(el => (
                            <NavByRole
                                link={`day/${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`}
                                key={el.id}
                                acceptableRoles={accessRoutes.lecturer}
                                role={localStorage.getItem('user-role')}
                            >
                                <DayScheduleCard
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
                            </NavByRole>
                        ));
                    })
                }
            </TimetableDay>
        </div>
    );
}

export default Day