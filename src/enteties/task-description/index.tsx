import React from 'react';
import Title from "./ui/title";

import IoData from "./ui/io-data";
import Description from "./ui/description";
import Tips from "./ui/tips";

import './style/index.scss'
import {MarkDown} from "../../pages/task/provider/task.provider";

type Img = string

export type TaskDescProps = {
    number: number
    description: MarkDown,
    title: string,
    ioData: Img
}

const TaskDescription = (
    {
        description,
        title,
        ioData,
        number
    }: TaskDescProps) => {
    return (
        <div className={'task-description__wrapper-wrapper'}>
            <div className={'task-description'}>
                <Title
                    title={title}
                    number={number}
                />
                {
                    ioData &&
                    <IoData ioData={ioData}/>
                }
                <Description description={description}/>
            </div>
        </div>
    );
};

export default TaskDescription;