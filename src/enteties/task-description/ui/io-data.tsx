import React from 'react';
import {TaskData} from "../../../pages/test/data/interface/task.inteface";
import {TaskDescProps} from "../index";

type Props = {} & Pick<TaskDescProps, 'ioData'>

const IoData = (
    {
        ioData
    }: Props) => {
    return (
        <div className={'task-description__io-data'}>
           <div className={'task-description__wrapper'}>
               {/*{
                   ioData.map((data, i) => (
                       <span key={i}>{data}</span>
                   ))
               }*/}
               <img src={ioData} alt={'io'}/>
           </div>
        </div>
    );
};

export default IoData;