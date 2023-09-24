import {action, makeObservable, observable} from "mobx";

type User = {
    name: string, surname: string, avatar: string, role: string
}

export class UserStore {
    role: string = ''
    avatar: string = ''
    name: string = ''
    surname: string = ''

    constructor() {
        makeObservable(this, {
            role: observable,
            avatar: observable,
            name: observable,
            surname: observable,
            setUser: action
        })

        this.role = localStorage.getItem('user-role')
    }

    setUser({name, role,avatar, surname}:User) {
        this.role = role
        this.name = name
        this.surname = surname
        this.avatar = avatar

        localStorage.setItem('user-role', role)
    }
}

export const userStore= new UserStore()