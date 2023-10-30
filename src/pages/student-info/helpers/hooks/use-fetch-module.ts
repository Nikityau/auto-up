import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";

import { LoaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";

export interface ModuleRes {
  id: string,
  title: string,
  number: number
}

export const useFetchModule = (loader: LoaderStore, courseId: string) => {
  const query = useQuery(`module-${courseId}`, async () => {
    loader.add("st-module");
    const modulesRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/modules/`);

    const moduleData = (modulesRes.data as ModuleRes[]).sort((m1, m2) => m1.number - m2.number);

    return moduleData
  }, {
    onSuccess: () => {
      loader.remove("st-module");
    },
    onError: () => {
      loader.remove("st-module");
    }
  })

  return query.data;
};