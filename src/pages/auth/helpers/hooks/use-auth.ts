import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authStore } from "../../store"
import { AppRoutes } from "../../../../shared/app-routes"

export const useAuth = () => {

    const nav = useNavigate()

    useEffect(() => {
        authStore.setAuthCb(auth)
    }, [])

    const adminResponse = () => {
        return {
            role: 'admin'
        }
    }

    const auth = ({login, password}) => {
        const res = adminResponse()

        if(res.role == 'admin') {
          nav(`/${AppRoutes.skillget}/${AppRoutes.lecturer}`, {replace: true}) 
        }
    }
}