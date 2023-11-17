import React from "react";
import { useManage } from "./helpers/hooks/use-manage";
import { observer } from "mobx-react-lite";

type Props = {
} & React.PropsWithChildren

const AccessManger = observer(({children}:Props) => {

  useManage()

  return (
    <>
      {children}
    </>
  );
});

export default AccessManger;