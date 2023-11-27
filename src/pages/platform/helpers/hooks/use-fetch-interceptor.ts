import axios from "axios"

export const useFetchInterceptor = () => {
    axios.interceptors.request.use((config) => {
        const userToken = localStorage.getItem('user-token')

        if (userToken) {
            config.headers.Authorization = `Token ${localStorage.getItem('user-token')}`
        }

        return config
    })
}