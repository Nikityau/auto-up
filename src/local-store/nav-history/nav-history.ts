export class NavHistoryStore<T> {
    history: T[] = []

    goBackCb = null

    add(loc: T) {
        this.history.push(loc)
    }

    prev() {
        return this.history.pop()
    }
    
    goBack() {
        this.goBackCb()
    }
}

export const navHistory = new NavHistoryStore()