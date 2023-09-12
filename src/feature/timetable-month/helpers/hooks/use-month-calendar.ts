import { nanoid } from "nanoid"
import { useMemo, useState } from "react"

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
        let to = null;
        for(let i = 0; i < dates.length; ++i) {
            if(dates[i].date) {
                to = i
                break;
            }
        }

        if(!to) return

        for(let i = to; i >= 0; --i) {
            const prevDate = dates[i + 1].date
            const newDate = new Date(prevDate)
            newDate.setDate(newDate.getDate() - 1)

            dates[i].date = newDate
        }

        return dates
    }

    const fillRight = (dates: DatesGrid[]): DatesGrid[] => {
        let from = null
        for(let i = dates.length - 1; i >= 0; --i) {
            if(dates[i].date) {
                from = i
                break
            }
        }

        if(!from) return dates

        

        for(let i = from; i < dates.length; ++i) {
            const prevDate = dates[i - 1].date
            const newDate = new Date(prevDate)
            newDate.setDate(newDate.getDate() + 1)

            dates[i].date = newDate            
        }

        return dates
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

        dGrid = fillLeft(dGrid)
        dGrid = fillRight(dGrid)

        return dGrid
    }, [dates])

    return datesGrid
}