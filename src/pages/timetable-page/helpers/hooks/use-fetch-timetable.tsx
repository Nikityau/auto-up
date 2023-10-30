import React, {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";

import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../adapter/schedule.adapter";
import {LoaderStore} from "../../../../local-store/loader/loader-store";

export type TimetableParsed = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = (loader: LoaderStore) => {
    const query = useQuery('timetable', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')

        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`)

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