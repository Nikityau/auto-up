import React from 'react';

type Props = {
    tasksCount: number,
    solvedCount: number
}

const Tasks = ({ tasksCount, solvedCount }: Props) => {
    return (
        <div className={'task-card__tasks'}>
            <span>
                Заданий: &nbsp;
                {
                    solvedCount == 0 || solvedCount == null
                        ? tasksCount + ' '
                        : `${solvedCount}/${tasksCount} `
                }
            </span>
        </div>
    );
};

export default Tasks;