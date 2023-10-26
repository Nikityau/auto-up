import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";

import {TimetableStore} from "../../../../local-store/timetable/timtetable-store";
import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";
import {CookieStore} from "../../../../local-store/cookie/cookie-store";
import {scheduleAdapter} from "../adapter/schedule.adapter";
import {LoaderStore} from "../../../../local-store/loader/loader-store";
import {useQuery} from "react-query";

type Timetable = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = (timetable: TimetableStore, cookieStore: CookieStore, loader: LoaderStore) => {
    const query = useQuery('timetable', async () => {
        loader.add(`${baseUrl}/api/v1/study_groups/schedule/` + 'timetable')

        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/schedule/`, {
            headers: {
                Authorization: `Token ${cookieStore.token}`
            }
        })

        const adapted = await scheduleAdapter(data, cookieStore.token)

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