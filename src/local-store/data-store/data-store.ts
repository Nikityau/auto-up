export class DataStore {
    cachedData: Map<string, any>

    constructor() {
        this.cachedData = new Map<string, any>()
    }

    set(key: string, data: any) {
        this.cachedData.set(key, data)
    }

    get(key: string) {
        if (this.cachedData.has(key)) {
            return this.cachedData.get(key)
        }

        return null
    }

    delete(key: string) {
        this.cachedData.delete(key)
    }
}

export const dataStore = new DataStore()