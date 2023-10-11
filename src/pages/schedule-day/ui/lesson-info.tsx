import React from 'react';
import { observer } from 'mobx-react-lite';
import { DayScheduleStore } from '../store/day-schedule-store';
import { toWeekDayStr } from '../../../shared/helpers/dates/to-weekday-str';

type Props = {
    schedule: DayScheduleStore
}

const LessonInfo = observer(({ schedule }: Props) => {
    return (
        <div className='schedule-day__lesson-info'>
            <div className='schedule-day__day'>
                <span>
                    {
                        schedule.currentSchedule?.date?.getDate() < 10
                          ? `0${schedule.currentSchedule?.date?.getDate()}`
                          : schedule.currentSchedule?.date?.getDate()
                    }
                </span>
                <span>{toWeekDayStr(schedule.currentSchedule?.date?.getDay())}</span>
            </div>
            <div className='schedule-day__lesson-container'>
                <div className='schedule-day__lesson-description'>
                    <div className='schedule-day__lesson-title'>
                        <span>Группа {schedule.currentSchedule?.groupTitle || "null"}</span>
                        <span>Курс: {schedule.currentSchedule?.courseTitle || "null"}</span>
                    </div>
                    <div className='schedule-day__lesson-theme'>
                        <span>{schedule.currentSchedule?.lessonTitle || "null"}</span>
                    </div>
                    <div className='schedule-day__line'>
                    </div>
                    <div className='schedule-day__time'>
                        <span>{schedule.currentSchedule?.timeStart || "null"} — {schedule.currentSchedule?.timeEnd || "null"}</span>
                    </div>
                </div>
                <div className='schedule-day__addon-materials'>
                    <div className='schedule-day__addon-title'>
                        <span>Дополнительные материалы</span>
                    </div>
                    <div className='schedule-day__addon-file'>
                        <a href={schedule.currentSchedule?.addonFiles?.presentation}>
                            <span>Презентация</span>
                        </a>
                    </div>
                    <div className='schedule-day__addon-file'>
                        <a href={schedule.currentSchedule?.addonFiles?.manual}>
                            <span>Методоческие указания</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default LessonInfo;