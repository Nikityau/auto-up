import axios from "axios";
import { baseUrl } from "../../../../shared/api/base-url";
import { Group } from "../hooks/types/group";
import { AttStatsRes, CourseRes, ResGroup } from './types/res-group'

export const groupAdapter = async (data: ResGroup): Promise<Group> => {
  const adaptedGroup: Group = {
    id: data.id,
    groupTitle: data.name,
    courseTitle: data.course,
    students: []
  }

  const courseRes = await axios.get(`${baseUrl}/api/v1/courses/${data.course}/`)
  adaptedGroup.courseTitle = (courseRes.data as CourseRes).title

  for (let st of data.students) {
    const attStats = await axios.get(`${baseUrl}/api/v1/study_groups/${adaptedGroup.id}/attend_status/`, {
      params: {
        student: st.id
      }
    })
    const solutionsStatus = await axios.get(`${baseUrl}/api/v1/study_groups/${adaptedGroup.id}/solutions/`, {
      params: {
        solution_status: 'done',
        student: st.id
      }
    })

    const dataAtt = attStats.data as AttStatsRes[]

    let attendedCount = 0

    for (let lessons of dataAtt) {
      if (lessons.is_attend) {
        attendedCount += 1
      }
    }

    adaptedGroup.students.push({
      id: st.id,
      avatar: null,
      name: st.first_name,
      surname: st.last_name,
      login: st.username,
      enrolled: null,
      status: 'active',
      attendance: Math.round(attendedCount / dataAtt.length * 100),
      password: st.raw_password,
      needCheck: solutionsStatus.data.length > 0
    })
  }

  return adaptedGroup
}