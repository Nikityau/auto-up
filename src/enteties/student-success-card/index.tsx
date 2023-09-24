import React from 'react'
import {TasksBlock} from "../../shared/data/interface/tasks-block.interface";
import Title from "./ui/title";
import TaskBlock from "../task-block";
import StudentStatus from "./ui/student-status";

import './style/index.scss'
import cn from "classnames";

type Props = {
    lessonNumber: number,
    theme: string,
    isWas: boolean,
    lessonWas: boolean
    tasks: TasksBlock[]
}

function StudentSuccessCard(
    {
        tasks,
        isWas,
        lessonNumber,
        theme,
        lessonWas
    }:Props) {
  return (
    <div className={cn(
        'student-success-card',
        !lessonWas && 'student-success-card_future_lesson'
    )}>
        <Title
            theme={theme}
            lessonNumber={lessonNumber}
        />
        <div className={'student-success-card__wrapper'}>
            <TaskBlock taskBlock={tasks}/>
        </div>
        <StudentStatus
            was={isWas}
            lessonWas={lessonWas}
        />
    </div>
  )
}

export default StudentSuccessCard