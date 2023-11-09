import axios from "axios";
import {useQuery} from "react-query";

import {loaderStore} from "../../../../local-store/loader/loader-store";
import {baseUrl} from "../../../../shared/api/base-url";
import {useErrorHandler} from "../../../../shared/helpers/hooks/use-error-handler";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";


interface GroupData {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: any[],
    status: string
}

interface ResGroup {
    id: string,
    course: string,
    name: string,
    students: {
        id: string,
        first_name: string,
        last_name: string
    }[]
}

interface LessonRes {
    id: string,
    lesson: {
        id: string,
        title: string
    }
}

interface StatGroupRes {
    previous_lesson: LessonRes | null
    next_lesson: LessonRes
}

export const useFetchGroups = () => {
    const errHandler = useErrorHandler()
    const {off, on} = useLoader(loaderStore)

    const query = useQuery('groups-query', async () => {
        on()

        const grps: GroupData[] = []
        const {data} = await axios.get(`${baseUrl}/api/v1/study_groups/`,)

        for (let group of data as ResGroup[]) {
            const sttatRes = await axios.get(`${baseUrl}/api/v1/study_groups/${group.id}/statistics/`)

            const statData = sttatRes.data as StatGroupRes

            const courseRes = await axios.get(`${baseUrl}/api/v1/courses/${group.course}/`)

            grps.push({
                id: group.id,
                groupTitle: group.name,
                courseTitle: courseRes.data['title'],
                status: statData.previous_lesson ? statData.previous_lesson?.lesson?.title : statData.next_lesson?.lesson?.title,
                students: group.students
            })
        }


        return grps
    }, {
        onSuccess: () => {
            off()
        },
        onError: (e) => {
            errHandler(e)
            off()
        }
    })

    return query.data
}