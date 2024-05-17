import {TTopDownApps} from "./index.types";
import {nanoid} from "nanoid";

import cisco from './assets/cisco.png'
import word from './assets/word.png'
import ps from './assets/ps.png'

export const topDownloadApps: Array<TTopDownApps> = [
    {
        id: nanoid(),
        icon: cisco,
        title: 'Cisco Packer Tracer',
        rate: '212 456'
    },
    {
        id: nanoid(),
        icon: word,
        title: 'Microsoft Word',
        rate: '202 531'
    },
    {
        id: nanoid(),
        icon: ps,
        title: 'Adobe Photoshop',
        rate: '198 364'
    }
]