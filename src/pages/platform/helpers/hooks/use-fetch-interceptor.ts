import axios from "axios"
import Cookies from "js-cookie";
import { useEffect } from "react"

export const useFetchInterceptor = () => {
    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Token ${Cookies.get('token')}`

        return config
    })

    useEffect(() => {
        console.log('change');
    }) 
}