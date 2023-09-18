import { useLocation, Location, useNavigate } from "react-router-dom"
import { navHistory } from "../../../../local-store/nav-history/nav-history"
import { useEffect } from "react"


export const useNavHistory = () => {
    const loc = useLocation()
    const nav = useNavigate()

   

    useEffect(() => {
        navHistory.add(loc)
    }, [loc])

    const back = () => {
        const prevLoc = navHistory.prev()
        nav(prevLoc)
    }

    useEffect(() => {
        navHistory.goBackCb = back
    }, [])
}