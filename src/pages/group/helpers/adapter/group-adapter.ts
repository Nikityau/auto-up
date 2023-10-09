import { Group } from "../hooks/use-fetch-group";

interface ResGroup {
  id: string,
  name: string,
  course: string,
  students: {
    id: string,
    first_name: string,
    last_name: string,
  }[]
}


export const groupAdapter = (data: ResGroup): Group => {
  const adapted: Group = {
    id: data.id,
    groupTitle: data.name,
    courseTitle: data.course,
    students: []
  }

  for(let st of data.students) {
    adapted.students.push({
      id: st.id,
      avatar: null,
      name: st.first_name,
      surname: st.last_name,
      login: 'empty',
      enrolled: null,
      status: 'active',
      attendance: 0,
      password: 'empty'
    })
  }

  return adapted
}