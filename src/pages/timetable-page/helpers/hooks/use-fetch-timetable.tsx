import axios from "axios";
import {useQuery} from "react-query";
import React, {useEffect} from "react";

import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../adapter/schedule.adapter";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import { NotifsContext } from "../../../../app/provider/with-notification";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";

export type TimetableParsed = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = (loader: LoaderStore) => {
    const errorHandler = useErrorHandler()


    const query = useQuery('timetable', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')

        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schexcvcxdule/`)

        const adapted = await scheduleAdapter(data)

        return {
          dates: adapted.dates,
          content: adapted.schedule
        }
    }, {
        onSuccess: (data) => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')
        },
        onError: (err) => {
            errorHandler(err)
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')
        }
    })

    useEffect(() => {
        return () => {
            loader.remove(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')
        }
    }, [])

    return query.data;
};