import React from 'react';
import { TaskBlock } from '../../pages/schedule-day/store/interface';
import Block from './ui/block';

import './style/index.scss'

type Props = {
    taskBlock: TaskBlock[]
}

const TaskBlock = ({ taskBlock }: Props) => {
    return (
        <div className='task-block'>
            {
                taskBlock.map(tb => (
                    <Block
                        key={tb.id}
                        block={tb}
                    />
                ))
            }
        </div>
    );
};

export default TaskBlock;