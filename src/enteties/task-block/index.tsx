import React from 'react';

import Tasks from "./ui/tasks";
import { TasksBlock } from "../../shared/data/interface/tasks-block.interface";

import './style/index.scss'

type Props = {
    taskBlock: TasksBlock[]
}

const TaskBlock = ({ taskBlock }: Props) => {
   return (
        <div className='task-block'>
            {/*{
                taskBlock && taskBlock.length > 0 &&
                taskBlock?.map((tb, i) => (
                    <Block
                        key={tb?.id}
                        block={tb}
                        number={i + 1}
                    />
                ))
            }*/}
            <Tasks
              block={taskBlock}
            />
        </div>
    );
};

export default TaskBlock;