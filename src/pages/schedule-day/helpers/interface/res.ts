export interface ResLesson {
  id: string,
  task_blocks: {
    id: string,
    task_amount: number,
    name: string,
    number: number
  }[],
  title: string,
  number: number,
  manual: string,
  presentation: string
}

