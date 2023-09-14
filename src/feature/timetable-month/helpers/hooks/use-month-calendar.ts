import produce from "immer"
import { nanoid } from "nanoid"
import { useMemo } from "react"

interface DatesGrid {
    id: string,
    date: Date,
    children: null
}

export const useMonthCalendar = (dates: Date[]) => {
    const offsetByDay = {
        "0": 6,
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        "6": 5,
    }

    const makeGrid = () => {
        const grid = Array.from({ length: 35 }, () => {
            const gr: DatesGrid = {
                id: nanoid(),
                date: null,
                children: null
            }

            return gr
        })

        return grid
    }

    const fillLeft = (dates: DatesGrid[]): DatesGrid[] => {
        return produce(dates, draft => {
            let from = null;
            for (let i = 0; i < draft.length; ++i) {
                if (draft[i].date) {
                    from = i
                    break;
                }
            }

            if (!from) return

            for (let i = from; i >= 0; --i) {
                const prevDate = draft[i + 1].date
                const newDate = new Date(prevDate)
                newDate.setDate(newDate.getDate() - 1)

                draft[i].date = newDate
            }

            return draft
        })
    }

    const fillRight = (dates: DatesGrid[]): DatesGrid[] => {
        return produce(dates, draft => {
            let from = null
            for (let i = draft.length - 1; i >= 0; --i) {
                if (draft[i].date) {
                    from = i
                    break
                }
            }

            if (!from) return draft

            for (let i = from; i < dates.length; ++i) {
                const prevDate = draft[i - 1].date
                const newDate = new Date(prevDate)
                newDate.setDate(newDate.getDate() + 1)

                draft[i].date = newDate
            }

            return draft
        })
    }

    const addDays = (dates: DatesGrid[]): DatesGrid[] => {
        return produce(dates, draft => {
            if (draft.length > 35) {
                const newl = 42 - draft.length

                for (let i = 0; i < newl; ++i) {
                    draft.push({
                        id: nanoid(),
                        date: null,
                        children: null
                    })
                }
            }

            return draft
        })
    }

    const datesGrid = useMemo<DatesGrid[]>(() => {
        let dGrid = makeGrid()

        const startDate = dates[0]
        const offset = offsetByDay[startDate.getDay()];

        for (let i = 0; i < dates.length; ++i) {
            if (!dGrid[i + offset]) {
                dGrid.push({
                    id: nanoid(),
                    date: dates[i],
                    children: null
                })
            } else {
                dGrid[i + offset].date = dates[i]
            }
        }

        dGrid = addDays(dGrid)

        dGrid = fillLeft(dGrid)
        dGrid = fillRight(dGrid)

        return dGrid
    }, [dates])

    return datesGrid
}