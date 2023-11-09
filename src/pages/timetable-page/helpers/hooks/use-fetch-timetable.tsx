import axios from "axios";
import { useQuery } from "react-query";
import React, { useEffect } from "react";

import { CourseInterface } from "../../../../shared/helpers/types/course.interface";
import { baseUrl } from "../../../../shared/api/base-url";
import { scheduleAdapter } from "../adapter/schedule.adapter";
import {loaderStore, LoaderStore} from "../../../../local-store/loader/loader-store";
import { useErrorHandler } from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";

export type TimetableParsed = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = () => {
    const errorHandler = useErrorHandler()
    const {on, off} = useLoader(loaderStore)


    const query = useQuery('timetable', async () => {
        on()

        const { data } = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`)

        const adapted = await scheduleAdapter(data)

        return {
            dates: adapted.dates,
            content: adapted.schedule
        }
    }, {
        onSuccess: (data) => {
            off()
        },
        onError: (err) => {
            errorHandler(err)
            off()
        }
    })

    return query.data;
};