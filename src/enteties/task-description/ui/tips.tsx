import React from 'react';
import {TaskData} from "../../../pages/test/data/interface/task.inteface";
import Tip from "./tip";
import {nanoid} from "nanoid";

type Props = {

} & Pick<TaskData, 'tips'>

const Tips = ({tips}:Props) => {
    return (
        <div className={'task-description__tips'}>
            <div className={'task-description__line'}>
            </div>
            <div className={'task-description__tip-title'}>
                <span>Подсказки</span>
            </div>
            <div className={'task-description__tips-list'}>
                {
                    tips.map(t => (
                        <Tip
                            key={nanoid()}
                            tip={t}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Tips;