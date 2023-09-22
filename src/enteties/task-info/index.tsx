import React from 'react';
import TaskSquare from '../task-square';

const TaskInfo = () => {
    return (
        <div className='task-info'>
            <TaskSquare
                number={1}
                type='empty'
                text='Не приступал'
            />
           
        </div>
    );
};

export default TaskInfo;