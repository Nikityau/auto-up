import React from 'react'

import DayControlPanel from '../../../feature/day-control-panel';
import TimetableDay from '../../../feature/timetable-day';
import { TimetableParsed } from '../helpers/hooks/use-fetch-timetable';
import DayScheduleCard from '../../../enteties/day-schedule-card';
import NavByRole from '../../../enteties/nav-by-role';
import { accessRoutes } from '../../../shared/data/access-routes';
import { dayTime } from '../../../feature/timetable-day/data/time';
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
    day: Date
    content: TimetableParsed,
    onNext: FType<Date, void>
    onPrev: FType<Date, void>
}

const Day = ({ content, day, onNext, onPrev }: Props) => {
    return (
        <div className={"timetable-day__wrapper"}>
            <TimetableDay
                ControlPanel={
                    <DayControlPanel
                        day={day}
                        onNext={() => onNext(day)}
                        onPrev={() => onPrev(day)}
                    />
                }
            >
                {
                    content?.schedule[`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`]?.map((el, i) => (
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
                    ))
                }
            </TimetableDay>
        </div>
    );
}

export default Day