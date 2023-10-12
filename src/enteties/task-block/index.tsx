import React from "react";

import Tasks from "./ui/tasks";
import {TasksBlock} from "../../shared/data/interface/tasks-block.interface";
import Block from "./ui/block";

import "./style/index.scss";
import {nanoid} from "nanoid";

type Props = {
    courseId: string
    lessonId: string
    groupId: string
    path: string
    taskBlock: any[]
}

export const TbContext = React.createContext<Omit<Props, "taskBlock">>(null)

const TaskBlock = ({taskBlock, lessonId, courseId, path, groupId}: Props) => {

    return (
        <TbContext.Provider value={{
            courseId,
            lessonId,
            path,
            groupId
        }}>
            <div className="task-block">
                {
                    taskBlock && taskBlock.length > 0 &&
                    taskBlock?.map((tb, i) => (
                        <Block
                            key={nanoid()}
                            block={tb.tasks}
                            number={i + 1}
                            title={tb.title}
                        />
                    ))
                }
                {/*<Tasks
              block={taskBlock}
            />*/}
            </div>
        </TbContext.Provider>
    );
};

export default TaskBlock;