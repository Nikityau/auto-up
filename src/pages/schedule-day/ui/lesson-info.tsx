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
                <span>0{schedule.currentSchedule.date.getDay()}</span>
                <span>{toWeekDayStr(schedule.currentSchedule.date.getDay())}</span>
            </div>
            <div className='schedule-day__lesson-container'>
                <div className='schedule-day__lesson-description'>
                    <div className='schedule-day__lesson-title'>
                        <span>Группа {schedule.currentSchedule.groupTitle}</span>
                        <span>Курс: {schedule.currentSchedule.courseTitle}</span>
                    </div>
                    <div className='schedule-day__lesson-theme'>
                        <span>{schedule.currentSchedule.lessonTitle}</span>
                    </div>
                    <div className='schedule-day__line'>
                    </div>
                    <div className='schedule-day__time'>
                        <span>{schedule.currentSchedule.timeStart} — {schedule.currentSchedule.timeEnd}</span>
                    </div>
                </div>
                <div className='schedule-day__addon-materials'>
                    <div className='schedule-day__addon-title'>
                        <span>Дополнительные материалы</span>
                    </div>
                    {
                        schedule.currentSchedule.addonFiles.map(f => (
                            <div className='schedule-day__addon-file'
                                key={f.id}
                            >
                                <a href={f.url}>
                                    <span>{f.title}</span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
});

export default LessonInfo;