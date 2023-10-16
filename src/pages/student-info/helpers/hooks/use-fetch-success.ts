import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { useEffect, useState } from "react";
import { ModuleRes } from "./use-fetch-module";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";
import { TasksBlock } from "../../../../shared/data/interface/tasks-block.interface";
import { FType } from "../../../../shared/helpers/types/f-types";
import { successAdapted } from "../adapter/success-adapted";
import { nanoid } from "nanoid";

export interface ModuleExtRes {
  id: string,
  title: string,
  lessons: {
    id: string,
    title: string,
    number: number
  }[]
}

export interface SuccessSt {
  lessonId: string,
  studentAttend: boolean,
  theme: string,
  number: number,
  tasks: TasksBlock[]
}

export interface ScRet {
  success: SuccessSt[],
  onChangeModule: FType<ModuleRes, void>
}

export const useFetchSuccess = (token: string, loader: LoaderStore, init: ModuleRes, courseId: string) : ScRet => {
  const [success, setSuccess] = useState<SuccessSt[]>();
  const { groupId, studentId } = useParams();

  useEffect(() => {
    (async () => {
      if (!init) return;

      await onChangeModule(init);
    })();
  }, [init]);

  const onChangeModule = async (module: ModuleRes) => {
    const key = nanoid()
    loader.add(key)
    const moduleRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/modules/${module.id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });

    const adapted = await successAdapted((moduleRes.data as ModuleExtRes).lessons, groupId, studentId, token, courseId)
    setSuccess(adapted)
    loader.remove(key)
  };

  return {
    success,
    onChangeModule
  };
};