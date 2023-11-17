import React from 'react';
import {FType} from "../../../shared/helpers/types/f-types";
import cn from "classnames";

import bg from '../assets/bg_stripes.png'

type Props = {
    number: number,
    isCurrent: boolean,
    onClick: FType<void, void>
}

const TaskNum = ({isCurrent, number, onClick}:Props) => {
    return (
        <div className={cn(
            'test-page__task-num',
            isCurrent && 'test-page__task-num_current'
        )}
            style={{
                background: isCurrent && `url(${bg})`
            }}
             onClick={() => onClick()}
        >
            <span>{number}</span>
        </div>
    );
};

export default TaskNum;