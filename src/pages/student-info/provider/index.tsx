import React from "react";
import { observer } from "mobx-react-lite";

import { useFetchUserInfo, UserInfo } from "../helpers/hooks/use-fetch-user-info";

import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";

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
  cookie: CookieStore,
  loader: LoaderStore
} & React.PropsWithChildren


const StudentInfoProvider = observer(({ children, cookie, loader }: Props) => {

  const user = useFetchUserInfo(loader);
  const att = useFetchAtt(loader);
  const module = useFetchModule(loader, user?.courseId);
  const success = useFetchSuccess(loader, module?.[0], user?.courseId)

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
});

export default StudentInfoProvider;