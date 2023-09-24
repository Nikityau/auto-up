import React from 'react';
import Block from './ui/block';

import './style/index.scss'

type Props = {
    taskBlock: any[]
}

const TaskBlock = ({ taskBlock }: Props) => {
    return (
        <div className='task-block'>
            {
                taskBlock?.map((tb, i) => (
                    <Block
                        key={tb.id}
                        block={tb}
                        number={i + 1}
                    />
                ))
            }
        </div>
    );
};

export default TaskBlock;