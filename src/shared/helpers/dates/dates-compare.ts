export const datesCompare = (d1: Date, d2: Date): boolean => {
    if (
        d1.getFullYear() == d2.getFullYear() &&
        d1.getMonth() == d2.getMonth() &&
        d1.getDate() == d2.getDate()
    )
        return true

    return false
}