import React from 'react';

type Props = {
    type: 'empty' | 'check' | 'right' | 'not right' | 'not solve',
    number: number,
    isSpec?: boolean,
    text?: string
}

const TaskSquare = ({isSpec = false, text,number, type}:Props) => {
    return (
        <div className='task-square'>
            
        </div>
    );
};

export default TaskSquare;