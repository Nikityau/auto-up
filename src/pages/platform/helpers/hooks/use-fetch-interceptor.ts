import axios from "axios"
import Cookies from "js-cookie";

export const useFetchInterceptor = () => {
    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Token ${Cookies.get('token')}`

        return config
    })
}