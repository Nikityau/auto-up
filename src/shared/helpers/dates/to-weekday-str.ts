const weekdays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
]


export const toWeekDayStr = (day: number) => {
    return weekdays[day]
}