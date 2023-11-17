import {useEffect, useState} from "react";
import axios from "axios";

interface FetchConfig {
    url: string,
    onBeforeLoadStart?: () => void,
    onLoaded?: (data: any) => void,
    onModify?: (data: any) => any,
    onError?: (err: any) => void
    onComplete?: (data: any) => void,
}

export const useFetch = (
    {
        url,
        onLoaded,
        onModify,
        onBeforeLoadStart,
        onComplete,
        onError,
    }: FetchConfig) => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        let finalData = null

        try {
            onBeforeLoadStart?.()

            const {data} = await axios.get(url)

            if(onLoaded) {
                await onLoaded(data)
            }

            const modified = await onModify?.(data) || data
            finalData = modified

            setState(modified)
        } catch (e) {
            await onError?.(e)
        } finally {
            await onComplete?.(finalData)
        }
    }

    return state
}