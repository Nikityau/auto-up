export interface TestTask {
  id: string
  taskTitle: string
  description: string
  hints: string[]
  codeExample?: string
  studentCode?: string
  testData: string[]
}


export interface Test {
  id: string
  tasks: TestTask[]
}
