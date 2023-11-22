import React from 'react';
import Title from "./ui/title";
import Description from "./ui/description";
import Tasks from "./ui/tasks";
import ButtonWithIcon from "../../shared/ui/btn-with-icon";

import './style/index.scss'

import task_img from './assets/task.png'

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
                <img src={task_img} alt={'icon'}/>
            </div>
            <div className={'task-card__wrapper'}>
               <div className={'task-card__container'}>
                   <Title title={title || 'title'}/>
                   <Description description={description || ['null']}/>
               </div>
                <div className={'task-card__lower-wrapper'}>
                    <Tasks
                        tasksCount={tasksCount}
                        solvedCount={solvedTasks}
                    />
                    <ButtonWithIcon
                        title={'Приступить'}
                        classNames={'task-card__btn'}
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;