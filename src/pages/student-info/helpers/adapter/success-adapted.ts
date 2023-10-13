import { ModuleExtRes, SuccessSt } from "../hooks/use-fetch-success";
import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";
import { TasksBlock } from "../../../../shared/data/interface/tasks-block.interface";

interface AttStRes {
  is_attend: boolean;
}

interface TbRes {
  id: string,
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
  title: string
}[], groupId: string, studentId: string, token: string, courseId: string): Promise<SuccessSt[]> => {
  const sc: SuccessSt[] = [];

  for (let lesson of lessons) {
    const stAttend = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/attend_status/`, {
      headers: {
        Authorization: `Token ${token}`
      },
      params: {
        student: studentId,
        lesson: lesson.id
      }
    });

    const tbRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lesson.id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
    const tbData = tbRes.data as TbRes;

    const tasksBlocks: TasksBlock[] = [];

    for (let tb of tbData.task_blocks) {
      const tbTemp: TasksBlock = {
        id: tb.id,
        title: tb.name,
        subtitle: null,
        tasks: []
      };

      const tasksRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/lessons/${lesson.id}/tasks/`, {
        headers: {
          Authorization: `Token ${token}`
        },
        params: {
          task_block: tb.id
        }
      });
      const taskData = tasksRes.data as TaskRes[];


      for (let task of taskData) {
        const taskInfo = await axios.get(`${baseUrl}/api/v1/study_groups/${groupId}/solutions/`, {
          headers: {
            Authorization: `Token ${token}`
          },
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
      studentAttend: (stAttend.data as AttStRes[])[0].is_attend
    };

    sc.push(scTemp);
  }

  return sc;
};