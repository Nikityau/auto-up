import React from "react";
import { observer } from "mobx-react-lite";

import { useFetchDay } from "../helpers/hooks/use-fetch-day";
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { DayScheduleStore } from "../store/day-schedule-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

type Props = {
  daySchedule: DayScheduleStore,
  loader: LoaderStore,
} & React.PropsWithChildren


export const SchDayContext = React.createContext(null)

const ScheduleDayProvider = observer(({children,daySchedule, loader}:Props) => {

  const updAtt = useFetchDay(daySchedule, loader)

  return (
    <SchDayContext.Provider value={{
      updAtt
    }}>
      {children}
    </SchDayContext.Provider>
  );
});

export default ScheduleDayProvider;