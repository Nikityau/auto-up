import { log } from "console"
import { action, autorun, computed, makeObservable, observable } from "mobx"

export class AuthStore {
    login: string = ""
    password: string = ""
    isRemeber: boolean = true

    authCb = null

    constructor() {
        makeObservable(this, {
            login: observable,
            password: observable,
            isRemeber: observable,
            switchRemeber: action,
            setLogin: action,
            setPassword: action,
            auth: action
        })
    }

    switchRemeber() {
        this.isRemeber = !this.isRemeber
    }

    setLogin(login: string) {
        this.login = login
    }

    setPassword(password: string) {
        this.password = password
    }

    auth() {
        this.authCb({
            login: this.login,
            password: this.password
        })
    }

    setAuthCb(cb) {
        this.authCb = cb
    }
}

export const authStore = new AuthStore()