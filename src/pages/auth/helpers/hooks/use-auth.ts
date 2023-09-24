import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {authStore} from "../../store"
import {AppRoutes} from "../../../../shared/app-routes"
import {userStore} from "../../../../local-store/user/user-store";

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

    const userResponse = () => {
        return {
            role: 'user'
        }
    }

    const auth = ({login, password}) => {
        let res = null

        if (login == 'admin') {
            res = adminResponse()
        }

        if (login == 'user') {
            res = userResponse()
        }

        if (res.role == 'admin') {
            userStore.setUser({
                role: 'lecturer',
                name: 'Jack',
                surname: 'Sparrow',
                avatar: ''
            })
            nav(`/${AppRoutes.skillget}/${AppRoutes.lecturer}`, {replace: true})
        }

        if (res.role == 'user') {
            userStore.setUser({
                role: 'student',
                name: 'Jack',
                surname: 'Sparrow',
                avatar: ''
            })
            nav(`/${AppRoutes.skillget}/${AppRoutes.student}`, {replace: true})
        }
    }
}