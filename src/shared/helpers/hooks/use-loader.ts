import {useContext, useEffect, useId} from "react";
import {LoaderContext} from "../../../app/provider/with-loader";

export const useLoader = () => {
    const uid = useId()
    const {add, remove} = useContext(LoaderContext)

    useEffect(() => {
        return () => {
            off()
        }
    }, [])

    const on = () => {
        add(uid)
    }

    const off = () => {
        remove(uid)
    }

    return {
        on,
        off
    }
}