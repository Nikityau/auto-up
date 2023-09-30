import React from 'react';
import {TaskData} from "../../pages/test/data/interface/task.inteface";
import Title from "./ui/title";

import IoData from "./ui/io-data";
import Description from "./ui/description";
import Tips from "./ui/tips";

import './style/index.scss'

type Props = {
    number: number
} & Omit<TaskData, 'codeExample' | 'userCode' | 'id'>

const TaskDescription = (
    {
        description,
        title,
        tips,
        ioData,
        number
    }: Props) => {
    return (
        <div className={'task-description'}>
            <Title
                title={title}
                number={number}
            />
            <IoData ioData={ioData}/>
            <Description description={description}/>
            <Tips tips={tips}/>
        </div>
    );
};

export default TaskDescription;