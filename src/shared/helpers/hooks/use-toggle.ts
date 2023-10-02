import { useState } from "react"
import { FType } from "../types/f-types"

type Return = [
    boolean, 
    {
        on: FType<void,void>,
        off: FType<void,void>,
        swtch: FType<void,void>
        swtchManual: FType<boolean, void>
    }
]

export const useToggle = (state: boolean = false): Return => {
    const [is, setIs] = useState<boolean>(state)

    const on = () => {
        setIs(true)
    }

    const off = () => {
        setIs(false)
    }

    const swtch = () => {
        setIs(prev => !prev)
    }

    const swtchManual = (value: boolean) => {
        setIs(value)
    }

    return [
        is,
        {
            on,
            off,
            swtch,
            swtchManual
        }
    ]
}