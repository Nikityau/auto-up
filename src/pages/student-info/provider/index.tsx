import React from "react";

import { useFetchUserInfo, UserInfo } from "../helpers/hooks/use-fetch-user-info";

import { AttStat, useFetchAtt } from "../helpers/hooks/use-fetch-att";
import { ModuleRes, useFetchModule } from "../helpers/hooks/use-fetch-module";
import { ScRet, useFetchSuccess } from "../helpers/hooks/use-fetch-success";


interface StInfoCntx {
  user: UserInfo,
  att: AttStat[],
  module: ModuleRes[],
  success: ScRet
}

export const StudentInfoContext = React.createContext<StInfoCntx>(null);

type Props = {
} & React.PropsWithChildren


const StudentInfoProvider = ({ children }: Props) => {

  const user = useFetchUserInfo();
  const att = useFetchAtt();
  const module = useFetchModule(user?.courseId);
  const success = useFetchSuccess(module?.[0], user?.courseId)

  return (
    <StudentInfoContext.Provider value={{
      user,
      att,
      module,
      success
    }}>
      {children}
    </StudentInfoContext.Provider>
  );
};

export default StudentInfoProvider;