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
    if(day == null) return "null"

    return weekdays[day]
}