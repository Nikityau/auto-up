import React from "react";
import { FType } from "../../../shared/helpers/types/f-types";
import { useToggle } from "../../../shared/helpers/hooks/use-toggle";

interface SuppContext {
  state: boolean,
  switchState: FType<void, void>
}

export const SupportIconContext = React.createContext<SuppContext>(null)

const SupportIconProvider = ({children}:React.PropsWithChildren) => {

  const [is, {swtch}] = useToggle()

  return (
    <SupportIconContext.Provider value={{
      state: is,
      switchState: swtch
    }}>
      {children}
    </SupportIconContext.Provider>
  );
};

export default SupportIconProvider;