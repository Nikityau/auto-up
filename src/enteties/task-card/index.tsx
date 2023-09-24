import React from 'react';
import Title from "./ui/title";
import Description from "./ui/description";
import Tasks from "./ui/tasks";

import './style/index.scss'
import Btn from "../../shared/ui/btn";
import ButtonWithIcon from "../../shared/ui/btn-with-icon";

export type TaskCardProps = {
    id?: string,
    title: string,
    description: string[],
    tasksCount: number,
    solvedTasks: number,
    icon: string
}

const TaskCard = (
    {
        tasksCount,
        solvedTasks,
        description,
        title,
        icon,
        id
    }: TaskCardProps) => {
    return (
        <div className={'task-card'}>
            <div className={'task-card__icon'}>
                <img src={icon} alt={'icon'}/>
            </div>
            <div className={'task-card__wrapper'}>
                <Title title={title}/>
                <Description description={description}/>
                <div className={'task-card__lower-wrapper'}>
                    <Tasks
                        tasksCount={tasksCount}
                        solvedCount={solvedTasks}
                    />
                    <ButtonWithIcon title={'Приступить'}/>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;