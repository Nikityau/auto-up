import React from 'react';

type Props = {
    tasksCount: number,
    solvedCount: number
}

const Tasks = ({tasksCount, solvedCount}:Props) => {
    return (
        <div className={'task-card__tasks'}>
            <span>
                {
                    solvedCount == 0 || solvedCount == null
                        ? tasksCount + ' '
                        : `${solvedCount}/${tasksCount} `
                }
                Заданий
            </span>
        </div>
    );
};

export default Tasks;