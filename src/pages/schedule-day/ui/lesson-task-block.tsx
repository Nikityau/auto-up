import React from 'react';
import { Task, TaskBlock } from '../store/interface';

type Props = {
    taskBlock: TaskBlock
}

const LessonTaskBlock = ({taskBlock}: Props) => {
    return (
        <div className='lesson-task-block'>
            <div className='lesson-task-block__title-block'>
                <span>{taskBlock.subtitle}</span>
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default LessonTaskBlock;