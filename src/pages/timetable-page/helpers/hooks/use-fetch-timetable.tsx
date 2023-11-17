import {CourseInterface} from "../../../../shared/helpers/types/course.interface";
import {baseUrl} from "../../../../shared/api/base-url";
import {scheduleAdapter} from "../adapter/schedule.adapter";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {useFetch} from "../../../../shared/helpers/hooks/use-fetch";

export type TimetableParsed = {
    dates: Date[],
    content: Omit<CourseInterface, "isCurrent">[]
}

export const useFetchTimetable = () => {
    const errorHandler = useErrorHandler()
    const {on, off} = useLoader()

    const timetable = useFetch({
        url: `${baseUrl}/api/v1/study_groups/schedule/`,
        onModify: async (data) => {
            const adapted = await scheduleAdapter(data)

            return {
                dates: adapted.dates,
                content: adapted.schedule
            }
        },
        onError: (err) => {
            errorHandler(err)
        },
        onBeforeLoadStart: () => {
            on()
        },
        onComplete: () => {
            off()
        }
    })

    return timetable;
};