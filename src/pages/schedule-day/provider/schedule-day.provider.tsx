import React from "react";
import { observer } from "mobx-react-lite";

import { useFetchDay } from "../helpers/hooks/use-fetch-day";
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { DayScheduleStore } from "../store/day-schedule-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

type Props = {
  cookie: CookieStore,
  daySchedule: DayScheduleStore,
  loader: LoaderStore,
  error: ErrorStore
} & React.PropsWithChildren


export const SchDayContext = React.createContext(null)

const ScheduleDayProvider = observer(({children,cookie, daySchedule, loader, error}:Props) => {

  const updAtt = useFetchDay(cookie, daySchedule, loader, error)

  return (
    <SchDayContext.Provider value={{
      updAtt
    }}>
      {children}
    </SchDayContext.Provider>
  );
});

export default ScheduleDayProvider;