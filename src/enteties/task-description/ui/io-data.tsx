import React from 'react';
import {TaskData} from "../../../pages/test/data/interface/task.inteface";

type Props = {} & Pick<TaskData, 'ioData'>

const IoData = (
    {
        ioData
    }: Props) => {
    return (
        <div className={'task-description__io-data'}>
           <div className={'task-description__wrapper'}>
               {
                   ioData.map((data, i) => (
                       <span key={i}>{data}</span>
                   ))
               }
           </div>
        </div>
    );
};

export default IoData;