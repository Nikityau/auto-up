import React from 'react';
import { TaskBlock } from '../../../pages/schedule-day/store/interface';
import Task from './task';

type Props = {
    block: TaskBlock
}

const Block = ({ block }: Props) => {
    return (
        <div className='task-block__block'>
            <div className='task-block__title'>
                <span>{block.subtitle}</span>
            </div>
            <div className='task-block__tasks'>
                <div className='task-block__tasks-title'>
                    <span>{block.title}</span>
                </div>
                <div className='task-block__task-list'>
                    {
                        block.tasks.map((task, i) => (
                            <Task
                                key={task.id}
                                task={task}
                                number={i + 1}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Block;