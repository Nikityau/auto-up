import React from 'react';
import {TaskData} from "../../../pages/test/data/interface/task.inteface";

type Props = {
    
} & Pick<TaskData, 'description'>

const Description = (
    {
        description
    }:Props) => {
    return (
        <div className={'task-description__description'}>
            {
                description.map((d,i) => (
                    <span key={i}>{d}</span>
                ))
            }
        </div>
    );
};

export default Description;