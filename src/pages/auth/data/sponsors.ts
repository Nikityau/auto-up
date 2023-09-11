import { nanoid } from "nanoid"

import sp1 from '../assets/sponsor-sys.png'
import sp2 from '../assets/sponsor-rstu.png'
import sp3 from '../assets/sponsor-skillget.png'
import sp4 from '../assets/sponsor-lift.png'

interface Sponsors {
    id: string,
    img: string
}


export const sponsors: Sponsors[] = [
    {
        id: nanoid(),
        img: sp1
    },
    {
        id: nanoid(),
        img: sp4
    },
    {
        id: nanoid(),
        img: sp3
    },
    {
        id: nanoid(),
        img: sp2
    }
]