import {makeAutoObservable} from "mobx";


export class LoaderStore {
    loadList: {
        unique: string
    }[] = []


    constructor() {
        makeAutoObservable(this)
    }

    add(ustr: string) {
        const f = this.loadList.find(l => l.unique == ustr)

        if (f) {
            return
        }

        this.loadList.push({
            unique: ustr
        })
    }

    remove(ustr: string) {
        this.loadList = this.loadList.filter(l => l.unique != ustr)
    }

    get isLoading() {
        return this.loadList.length > 0
    }
}

export const loaderStore = new LoaderStore()

