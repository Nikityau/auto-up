import { action, makeObservable, observable } from "mobx"

export class AuthStore {
    login: string = ""
    password: string = ""
    isRemember: boolean = true

    authCb = null

    constructor() {
        makeObservable(this, {
            login: observable,
            password: observable,
            isRemember: observable,
            switchRemember: action,
            setLogin: action,
            setPassword: action,
            auth: action
        })
    }

    switchRemember() {
        this.isRemember = !this.isRemember
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