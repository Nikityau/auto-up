import React from 'react'
import TaskSquare from '../../../enteties/task-square'
import {TasksBlock} from "../../../shared/data/interface/tasks-block.interface";

type Props = {
    block: TasksBlock,
}

function Tasks({ block }: Props) {
    return (
        <div className='task-block__tasks'>
            <div className='task-block__tasks-title'>
                <span>{block.title}</span>
            </div>
            <div className='task-block__task-list'>
                {
                    block.tasks.map((task, i) => (
                        <TaskSquare
                            number={i + 1}
                            type={task.type}
                            key={task.id}
                            id={task.id}
                            isSpec={task.isSpec}
                            text={task.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Tasks