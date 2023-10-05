import React from "react";
import { useManage } from "./helpers/hooks/use-manage";
import { observer } from "mobx-react-lite";
import { UserStore } from "../../local-store/user/user-store";
import { CookieStore } from "../../local-store/cookie/cookie-store";

type Props = {
  userStore: UserStore,
  cookieStore: CookieStore
} & React.PropsWithChildren

const AccessManger = observer(({children, userStore, cookieStore}:Props) => {

  useManage(userStore, cookieStore)

  return (
    <>
      {children}
    </>
  );
});

export default AccessManger;