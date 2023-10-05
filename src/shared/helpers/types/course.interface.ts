export interface CourseInterface {
  id: string
  groupTitle: string,
  courseTitle: string,
  theme: string,
  startTime: string,
  endTime: string,
  type: 'online' | 'offline'
  lessonPerDay?: number,
  isCurrent?: boolean,
  date: Date
}