import { nanoid } from "nanoid";
import { Test } from "./interface";

export const testData: Test = {
  id: nanoid(),
  tasks: [
    {
      id: nanoid(),
      taskTitle: "Исправь ошибки в программе",
      testData: [
        "Введи зарплату за месяц:",
        ">>> 30000",
        "Введи кол-во дней отпуска:",
        ">>> 14",
        "Примерные отпускные: 14334.4709898"
      ],
      description: "",
      hints: [
        ""
      ],
      studentCode: null,
      codeExample: 'month_salary = input(\'Введите зарплату за месяц:\')\n' +
        'month_salary = int(month_salary)\n' +
        'vacation = input(\'Введите количество дней отпуска:\')\n' +
        'vacation = int(vacation)\n' +
        'month = 29.3 #среднее количество дней в месяце\n' +
        'daily_savary = month_salary/month\n' +
        'vacation_pay = daily_savary*vacation\n' +
        'print(\'Примерные отпускные:\', vacation_pay)'
    },
    {
      id: nanoid(),
      taskTitle: "Исправь ошибки в программе",
      testData: [
        "Введи зарплату за месяц:",
        ">>> 30000",
        "Введи кол-во дней отпуска:",
        ">>> 14",
        "Примерные отпускные: 14334.4709898"
      ],
      description: "",
      hints: [
        ""
      ],
      studentCode: null,
      codeExample: null
    },
    {
      id: nanoid(),
      taskTitle: "Исправь ошибки в программе",
      testData: [
        "Введи зарплату за месяц:",
        ">>> 30000",
        "Введи кол-во дней отпуска:",
        ">>> 14",
        "Примерные отпускные: 14334.4709898"
      ],
      description: "",
      hints: [
        ""
      ],
      studentCode: null,
      codeExample: null
    },
    {
      id: nanoid(),
      taskTitle: "Исправь ошибки в программе",
      testData: [
        "Введи зарплату за месяц:",
        ">>> 30000",
        "Введи кол-во дней отпуска:",
        ">>> 14",
        "Примерные отпускные: 14334.4709898"
      ],
      description: "",
      hints: [
        ""
      ],
      studentCode: null,
      codeExample: null
    },
    {
      id: nanoid(),
      taskTitle: "Исправь ошибки в программе",
      testData: [
        "Введи зарплату за месяц:",
        ">>> 30000",
        "Введи кол-во дней отпуска:",
        ">>> 14",
        "Примерные отпускные: 14334.4709898"
      ],
      description: "",
      hints: [
        ""
      ],
      studentCode: null,
      codeExample: null
    },
  ]
}