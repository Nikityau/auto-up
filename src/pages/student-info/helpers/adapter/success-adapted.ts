import axios from "axios";

import { SuccessSt } from "../hooks/use-fetch-success";
import { baseUrl } from "../../../../shared/api/base-url";
import { TasksBlock } from "../../../../shared/data/interface/tasks-block.interface";

interface AttStRes {
  is_attend: boolean;
}

interface TbRes {
  id: string,
  number: number
  task_blocks: {
    id: string,
    name: string
  }[]
}

interface TaskRes {
  id: string,
  name: string
}

type SolutionStatus = 'not viewed' | 'viewed' | 'done' | 'approved' | 'wrong'
interface TaskInfoRes {
  id: string,
  solution_status: SolutionStatus
}

export const successAdapted = async (lessons: {
  id: string,
  title: string,
  number: number
}[], groupId: string, studentId: string, courseId: string): Promise<SuccessSt[]> => {
  let sc: SuccessSt[] = [];

  for (let lesson of lessons) {
    const stAttend = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/attend_status/`, {
      params: {
        student: studentId,
        lesson: lesson.id
      }
    });

    const tbRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lesson.id}/`);
    const tbData = tbRes.data as TbRes;

    const tasksBlocks: TasksBlock[] = [];

    for (let tb of tbData.task_blocks) {
      const tbTemp: TasksBlock = {
        id: tb.id,
        title: tb.name,
        subtitle: null,
        number: tbData.number,
        tasks: []
      };

      const tasksRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lesson.id}/tasks/`, {
        params: {
          task_block: tb.id
        }
      });
      const taskData = tasksRes.data as TaskRes[];

      for (let task of taskData) {
        const taskInfo = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/`, {
          params: {
            student: studentId,
            task: task.id
          }
        })
        const taskInfoData = taskInfo.data as TaskInfoRes[]

        const typeByStatus = (sol: SolutionStatus) => {
          switch (sol) {
            case "not viewed": return 'empty'
            case "viewed": return 'empty'
            case "done": return "check"
            case "wrong": return "not_right"
            case "approved": return "right"
            default: return 'empty'
          }
        }

        tbTemp.tasks.push({
          id: task.id,
          isSpec: false,
          type: typeByStatus(taskInfoData[0]?.solution_status)
        });
      }

      tasksBlocks.push(tbTemp);
    }

    const scTemp: SuccessSt = {
      lessonId: lesson.id,
      theme: lesson.title,
      tasks: tasksBlocks,
      number: tbData.number,
      studentAttend: (stAttend.data as AttStRes[])[0].is_attend
    };

    sc.push(scTemp);
  }

  sc = sc.sort((l1, l2) => l1.number - l2.number)

  return sc;
};