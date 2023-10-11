import { Group } from "../hooks/use-fetch-group";
import axios from "axios";
import {baseUrl} from "../../../../shared/api/base-url";

interface ResGroup {
  id: string,
  name: string,
  course: string,
  students: {
    id: string,
    first_name: string,
    last_name: string,
    raw_password: string
  }[]
}

interface AttStatsRes {
  student: string,
  is_attend: boolean,
  lesson: string
}

export const groupAdapter = async (data: ResGroup, token: string): Promise<Group> => {
  const adapted: Group = {
    id: data.id,
    groupTitle: data.name,
    courseTitle: data.course,
    students: []
  }

  for(let st of data.students) {
    const attStats = await axios.get(`${baseUrl}/api/v1/study_groups/${adapted.id}/attend_status/`, {
      headers: {
        Authorization: `Token ${token}`
      },
      params: {
        student: st.id
      }
    })
    const dataAtt = attStats.data as AttStatsRes[]

    let attendedCount = 0

    for(let lessons of dataAtt) {
      if(lessons.is_attend) {
        attendedCount += 1
      }
    }

    adapted.students.push({
      id: st.id,
      avatar: null,
      name: st.first_name,
      surname: st.last_name,
      login: 'empty',
      enrolled: null,
      status: 'active',
      attendance: Math.round(attendedCount / dataAtt.length * 100),
      password: st.raw_password
    })
  }

  return adapted
}