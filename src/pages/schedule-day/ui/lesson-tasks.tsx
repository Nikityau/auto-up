import {observer} from "mobx-react-lite";
import React from "react";
import {DayScheduleStore} from "../store/day-schedule-store";
import TaskBlock from "../../../enteties/task-block";

type Props = {
    schedule: DayScheduleStore
}

const LessonTasks = observer(({schedule}: Props) => {
    return (
        <div className="schedule-day__lesson-tasks">
            <div className="schedule-day__lesson-task-title">
                <span>Задания</span>
            </div>
            <div className="schedule-day__tasks">
                <TaskBlock
                    path={'/skillget/lecturer/course/:courseId/lesson/:lessonId/task/:taskId'}
                    lessonId={schedule.currentSchedule?.lessonId}
                    courseId={schedule.currentSchedule?.courseId}
                    taskBlock={
                        schedule.currentSchedule?.tasks
                    }
                />
            </div>
        </div>
    );
});

export default LessonTasks;