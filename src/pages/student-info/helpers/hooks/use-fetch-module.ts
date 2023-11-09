import axios from "axios";
import { useQuery } from "react-query";

import {loaderStore } from "../../../../local-store/loader/loader-store";
import { baseUrl } from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export interface ModuleRes {
  id: string,
  title: string,
  number: number
}

export const useFetchModule = (courseId: string) => {
  const err = useErrorHandler()
  const {off, on} = useLoader(loaderStore)

  const query = useQuery(`module-${courseId}`, async () => {
    on()
    const modulesRes = await axios.get(`${baseUrl}/api/v1/courses/${courseId}/modules/`);

    const moduleData = (modulesRes.data as ModuleRes[]).sort((m1, m2) => m1.number - m2.number);

    return moduleData
  }, {
    onSuccess: () => {
      off()
    },
    onError: (e) => {
      err(e)
      off()
    }
  })

  return query.data;
};