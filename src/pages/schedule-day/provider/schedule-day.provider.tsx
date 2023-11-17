import React from "react";
import { observer } from "mobx-react-lite";

import { useFetchDay } from "../helpers/hooks/use-fetch-day";
import { DayScheduleStore } from "../store/day-schedule-store";

type Props = {
  daySchedule: DayScheduleStore,
} & React.PropsWithChildren


export const SchDayContext = React.createContext(null)

const ScheduleDayProvider = observer(({children,daySchedule}:Props) => {

  const updAtt = useFetchDay(daySchedule)

  return (
    <SchDayContext.Provider value={{
      updAtt
    }}>
      {children}
    </SchDayContext.Provider>
  );
});

export default ScheduleDayProvider;