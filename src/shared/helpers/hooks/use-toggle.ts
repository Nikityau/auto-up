import { useState } from "react"
import { FType } from "../types/f-types"

type Return = [
    boolean, 
    {
        on: FType<null,void>,
        off: FType<null,void>,
        swtch: FType<null,void>
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

    return [
        is,
        {
            on,
            off,
            swtch
        }
    ]
}