import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";

export interface ModuleRes {
  id: string,
  title: string
}

export const useFetchModule = (token: string, loader: LoaderStore, courseId: string) => {
  const [modules, setModules] = useState<ModuleRes[]>();
  const { groupId, studentId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        loader.add("st-module");
        const modulesRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/modules/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        });

        const moduleData = modulesRes.data as ModuleRes[];
        setModules(moduleData);
      } catch (e) {

      } finally {
        loader.remove("st-module");
      }
    })();
  }, [courseId]);

  return modules;
};