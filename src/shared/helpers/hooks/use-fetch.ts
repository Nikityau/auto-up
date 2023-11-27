import {useEffect, useState} from "react";
import axios from "axios";
import {dataStore} from "../../../local-store/data-store/data-store";

interface FetchConfig {
    url: string,
    uniqueKey?: string
    needCache?: boolean,
    onBeforeLoadStart?: () => void,
    onLoaded?: (data: any) => void,
    onModify?: (data: any) => any,
    onError?: (err: any) => void
    onComplete?: (data: any) => void,
}

export const useFetch = (
    {
        url,
        uniqueKey,
        needCache,
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

        if(needCache && dataStore.get(uniqueKey)) {
            finalData = dataStore.get(uniqueKey)
            setState(finalData)

            return
        }

        try {
            onBeforeLoadStart?.()

            const {data} = await axios.get(url)

            if(onLoaded) {
                await onLoaded(data)
            }

            const modified = await onModify?.(data) || data
            finalData = modified

            if(needCache) {
                dataStore.set(uniqueKey, finalData)
            }

            setState(modified)
        } catch (e) {
            await onError?.(e)
        } finally {
            await onComplete?.(finalData)
        }
    }

    return state
}