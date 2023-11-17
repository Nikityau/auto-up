import { action, makeObservable, observable } from "mobx";
import Cookies from "js-cookie";

export class CookieStore {
  token: string = null
  roles: string = null

  constructor() {
    makeObservable(this, {
      roles: observable,
      token: observable,
      dispose: action,
      setCookie: action
    })

    this.token = Cookies.get('token')
    this.roles = Cookies.get('roles')
  }

  setCookie(token: string, roles: any, time: number) {
    this.token = token
    this.roles = roles

    Cookies.set('token', token, {
      expires: time
    })
    Cookies.set('roles', roles, {
      expires: time
    })
  }

  dispose() {
    this.token = null
    this.roles = null

    Cookies.remove('token')
    Cookies.remove('roles')
  }
}

export const cookieStore = new CookieStore()