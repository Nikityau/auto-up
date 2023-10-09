export const toNormalNum = (date: Date) => {
    if(!date) return "null"

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}