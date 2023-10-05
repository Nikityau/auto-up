import React from 'react';
import cn from 'classnames'
import { CourseInterface } from "../../shared/helpers/types/course.interface";

import './style/index.scss'

type Props = {

} & CourseInterface

const CalendarLesson = ({
    id,
    courseTitle,
    endTime,
    groupTitle,
    startTime,
    theme,
    type,
    lessonPerDay = 1,
    isCurrent = false
}: Props) => {
    return (
        <div className={cn([
            'calendar-lesson',
            isCurrent && 'calendar-lesson_current'
        ])}>
            <div className='calendar-lesson__title'>
                <p>Группа {groupTitle}</p>
                <p>Курс: {courseTitle}</p>
            </div>
            <div className='calendar-lesson__theme'>
                <span>{theme}</span>
            </div>
            <div className='calendar-lesson__time'>
                <span>{startTime} — {endTime}</span>
            </div>
            <div className={cn(
                'calendar-lesson__type',
                lessonPerDay >= 2 && 'calendar-lesson__type_many',
                type == 'online'
                    ? 'calendar-lesson__type_online'
                    : 'calendar-lesson__type_offline',
                lessonPerDay >= 2 && type == 'online' && 'calendar-lesson__type_online_many',
                lessonPerDay >= 2 && type == 'offline' && 'calendar-lesson__type_offline_many',
            )}>
                {
                    lessonPerDay >= 2 
                    ? `+${lessonPerDay - 1}` : null
                }
            </div>
        </div>
    );
};

export default CalendarLesson;