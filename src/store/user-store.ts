import { makeObservable, observable } from "mobx"

export class UserStore {
    role: 'lecturer' | 'student' = null

    constructor() {
        makeObservable(this, {
            role: observable
        })

        this.role = 'lecturer'
    }
}

export const userStore = new UserStore()