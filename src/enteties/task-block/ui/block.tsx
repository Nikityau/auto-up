import React from 'react';
import Tasks from './tasks';
import {TasksBlock} from "../../../shared/data/interface/tasks-block.interface";

type Props = {
    block: TasksBlock,
    number: number
}

const Block = ({ block, number }: Props) => {
    return (
        <div className='task-block__block'>
            <div className='task-block__title'>
                <span>
                    Б-{
                        number < 10 
                        ? number == 1 ? `01 ` : `0${number}`
                        : number
                    }
                </span>
            </div>
            {/*<Tasks block={block}/>*/}
        </div>
    );
};

export default Block;