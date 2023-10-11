import React, { useContext } from "react";
import TaskSquare from "../../../enteties/task-square";
import { TasksBlock } from "../../../shared/data/interface/tasks-block.interface";
import { TbContext } from "../index";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../shared/app-routes";

type Props = {
  title: string
  block: TasksBlock[],
}

function Tasks({ block, title}: Props) {

  const {lessonId, courseId} = useContext(TbContext)

  return (
    <div className="task-block__tasks">
      <div className="task-block__tasks-title">
        <span>{title}</span>
      </div>
      <div className="task-block__task-list task-block__task-squares-list">
        {/*{
                    block && block?.tasks &&
                    block.tasks.map((task, i) => (
                        <TaskSquare
                            number={i + 1}
                            type={task.type}
                            key={task.id}
                            id={task.id}
                            isSpec={task.isSpec}
                            text={task.text}
                        />
                    ))
                }*/}
        {
          block &&
          block.map((task, i) => (
            <Link
              to={`/${AppRoutes.skillget}/course/${courseId}/lesson/${lessonId}/task/${task.id}`}
              key={task.id}
            >
              <TaskSquare
                number={i + 1}
                type={"empty"}
                id={task.id}
                isSpec={false}
                text={null}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Tasks;