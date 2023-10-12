import {makeAutoObservable} from "mobx";

export interface IError {
    id: string,
    title: string,
    description: string
}


export class ErrorStore {
    errors: IError[] = []


    constructor() {
        makeAutoObservable(this)
    }


    addError(err:IError) {
        this.errors.push(err)
    }

    removeError(err: IError) {
        this.errors = this.errors.filter(e => e.id != err.id)
    }
}

export const errorStore = new ErrorStore()