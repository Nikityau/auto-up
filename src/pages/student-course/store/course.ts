import axios from "axios"
import { Subject } from "rxjs"

import { baseUrl } from "../../../shared/api/base-url"

export interface ICourse {
    id: string,
    title: string,
}

export interface IModule {
    id: string,
    title: string,
    number: number
}

export class Publisher {
    private sibscribers: Subject<any> = new Subject()

    subscribe(cb) {
        return this.sibscribers.subscribe({
            next(value) {
                cb(value)
            },
        }).unsubscribe
    }

    push(data: any) {
        this.sibscribers.next(data)
    }

    pull() {
        return null   
    }
}

export class Course extends Publisher {
    course: ICourse = null

    async fetch() {
        const courseRes = await axios.get(`${baseUrl}/api/v1/courses/`)
        this.course = (courseRes.data as ICourse[])[0]

        this.push(this.course)
    }

    pull() {
        return this.course
    }
}

export class Modules extends Publisher {
    modules: IModule[] = null

    fetch() {
        
    }

    pull() {
        return this.modules
    }
}

export const courseStore = new Course()