import React from "react";
import {TasksBlock} from "../../shared/data/interface/tasks-block.interface";
import Title from "./ui/title";
import TaskBlock from "../task-block";
import StudentStatus from "./ui/student-status";

import "./style/index.scss";
import cn from "classnames";

type Props = {
    studentId: string
    lessonNumber: number,
    theme: string,
    isWas: boolean,
    lessonWas: boolean
    tasks: TasksBlock[],
    courseId: string,
    lessonId: string,
    groupId: string
}

function StudentSuccessCard(
    {
        courseId,
        lessonId,
        tasks,
        isWas,
        lessonNumber,
        theme,
        lessonWas,
        studentId,
        groupId
    }: Props) {
    return (
        <div className={cn(
            "student-success-card",
            !lessonWas && "student-success-card_future_lesson"
        )}>
            <Title
                theme={theme}
                lessonNumber={lessonNumber}
            />
            <div className={"student-success-card__wrapper"}>
                <TaskBlock
                    path={`/skillget/lecturer/course/:courseId/lesson/:lessonId/task/:taskId/group/${groupId}/student/${studentId}`}
                    taskBlock={tasks}
                    groupId={groupId}
                    courseId={courseId}
                    lessonId={lessonId}
                />
            </div>
            <StudentStatus
                was={isWas}
                lessonWas={lessonWas}
            />
        </div>
    );
}

export default StudentSuccessCard;