import React from "react";

interface WeekCntx {
  showCurrentDay: boolean
}

export const WeekContext = React.createContext<WeekCntx>(null)

type Props = {
  showCurrentDay: boolean
} & React.PropsWithChildren

const WeekProvider = ({showCurrentDay, children}:Props) => {
  return (
    <WeekContext.Provider value={{
      showCurrentDay
    }}>
      {children}
    </WeekContext.Provider>
  );
};

export default WeekProvider;