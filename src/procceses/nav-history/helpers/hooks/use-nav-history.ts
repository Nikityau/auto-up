import { useEffect } from "react"
import { useLocation, Location, useNavigate } from "react-router-dom"
import equal from "deep-equal"

class NavHistory {
    private current: Location = null
    private history: Location[] = []

    add(loc:Location) {
        if(this.current == null) {
            this.current == loc
        }

        if(!equal(this.current, loc)) {
            this.history.push(this.current)
            this.current = loc
        }
    }

    prev() {
        return this.history.pop()
    }
}

const history = new NavHistory()

export const useNavHistory = () => {
    const location = useLocation()
    const nav = useNavigate()

    useEffect(() => {
        history.add(location)
        console.log(history);
    }, [location])

    const goBack = () => {    
        nav(history.prev().pathname)
    }

    return goBack
}