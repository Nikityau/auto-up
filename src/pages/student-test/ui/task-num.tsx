import React from "react";
import cn from "classnames";

import { FType } from "../../../shared/helpers/types/f-types";

import bg from '../assets/task-num-bg.png'

type Props = {
  number: number,
  isCurrent: boolean
  onClick: FType<void, void>,
  classNames?: string[]
}

const TaskNum = ({ number, onClick,  classNames, isCurrent }: Props) => {
  return (
    <div className={cn(
      "student-test__task-num",
      isCurrent && 'student-test__task-num_current'
    )
    }
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