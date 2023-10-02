import React from "react";
import { useManage } from "./helpers/hooks/use-manage";
import { observer } from "mobx-react-lite";
import { UserStore } from "../../local-store/user/user-store";

type Props = {
  userStore: UserStore
} & React.PropsWithChildren

const AccessManger = observer(({children, userStore}:Props) => {

  useManage(userStore)

  return (
    <>
      {children}
    </>
  );
});

export default AccessManger;