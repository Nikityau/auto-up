import { action, makeObservable, observable } from "mobx";
import { ErrorInterface } from "../../../shared/helpers/types/error.interface";
export class AuthStore {
  login: string = "";
  password: string = "";
  isRem: boolean = false;
  error: ErrorInterface[] = [];

  constructor() {
    makeObservable(this, {
      login: observable,
      password: observable,
      error: observable,
      isRem: observable,
      setIsRem: action,
      setLogin: action,
      setPassword: action,
      validate: action,
    })
  }

  setLogin(value: string) {
    this.login = value
    this.validate()
  }

  setPassword(value: string) {
    this.password = value
    this.validate()
  }

  setIsRem(value: boolean) {
    this.isRem = value
  }

  validate() {
    let err = false

    if(this.login.length == 0) {
      err = true

      this.error.push({
        where: 'login',
        description: 'len 0'
      })
    }
    if(this.password.length == 0) {
      err = true

      this.error.push({
        where: 'password',
        description: 'len 0'
      })
    }

    if(!err) {
      this.error = []
    }
  }
}