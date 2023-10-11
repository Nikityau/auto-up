import React from "react";
import { observer } from "mobx-react-lite";

import { useFetchDay } from "../helpers/hooks/use-fetch-day";
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { DayScheduleStore } from "../store/day-schedule-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";

type Props = {
  cookie: CookieStore,
  daySchedule: DayScheduleStore,
  loader: LoaderStore
} & React.PropsWithChildren

const ScheduleDayProvider = observer(({children,cookie, daySchedule, loader}:Props) => {

  useFetchDay(cookie, daySchedule, loader)

  return (
    <>
      {children}
    </>
  );
});

export default ScheduleDayProvider;