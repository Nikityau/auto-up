export interface ResSchedule {
  id: string,
  lesson: {
    id: string,
    title: string,
    number: number,
    manual: string
  },
  group_name: string,
  teacher: {
    id: string,
    first_name: string,
    last_name: string,
  },
  course: {
    id: string,
    title: string,
  },
  status: string,
  start_time: Date,
  end_time: Date,
  duration_minutes: number,
  group: string
}
