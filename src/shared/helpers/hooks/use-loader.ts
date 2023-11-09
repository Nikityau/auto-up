import {useEffect, useId} from "react";
import {LoaderStore} from "../../../local-store/loader/loader-store";

export const useLoader = (loaderStore: LoaderStore) => {
    const uid = useId()

    useEffect(() => {
        return () => {
            off()
        }
    }, [])

    const on = () => {
        loaderStore.add(uid)
    }

    const off = () => {
        loaderStore.remove(uid)
    }

    return {
        on,
        off
    }
}