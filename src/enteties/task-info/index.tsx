import React from 'react';
import TaskSquare, { TaskSquareProps } from '../task-square';
import { nanoid } from 'nanoid';

import './style/index.scss'

type Tasks = {
    id: string
} & TaskSquareProps

const tasks: Tasks[] = [
    {
        id: nanoid(),
        number: 1,
        type: 'empty',
        isSpec: false,
        text: 'Не приступал'
    },
    {
        id: nanoid(),
        number: 2,
        type: 'check',
        isSpec: false,
        text: 'Требует проверки'
    },
    {
        id: nanoid(),
        number: 3,
        type: 'right',
        isSpec: false,
        text: 'Решено верно'
    },
    {
        id: nanoid(),
        number: 4,
        type: 'not_right',
        isSpec: false,
        text: 'Решено не верно'
    },
    {
        id: nanoid(),
        number: 5,
        type: 'not_solve',
        isSpec: false,
        text: 'Нет решения'
    },
]

const TaskInfo = () => {
    return (
        <div className='task-info'>
            {
                tasks.map(t => (
                    <TaskSquare
                        key={t.id}
                        number={t.number}
                        type={t.type}
                        text={t.text}
                    />
                ))
            }
        </div>
    );
};

export default TaskInfo;