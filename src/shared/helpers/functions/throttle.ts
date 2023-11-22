import {FType} from "../types/f-types";

export const throttle = (fn: FType<any, any>, timeout: number) => {
    let timer = null

    return (...args: any[]) => {
        if(timer) return

        timer = setTimeout(() => {
            fn(args)

            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}