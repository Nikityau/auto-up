import {useEffect, useState} from "react";
import axios from "axios";

interface FetchConfig {
    url: string,
    onBeforeLoadStart?: () => void,
    onLoaded?: (data: any) => void,
    onModify?: (data: any) => any,
    onError?: (err: any) => void
    onComplete?: () => void
}

export const useFetch = (
    {
        url,
        onLoaded,
        onModify,
        onBeforeLoadStart,
        onComplete,
        onError
    }: FetchConfig) => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            onBeforeLoadStart?.()

            const {data} = await axios.get(url)

            const modified = await onModify?.(data) || data

            setState(modified)
        } catch (e) {
            await onError?.(e)
        } finally {
            await onComplete?.()
        }
    }

    return state
}