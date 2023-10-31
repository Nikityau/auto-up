import { useContext } from "react"
import { nanoid } from "nanoid"
import { NotifsContext } from "../../../app/provider/with-notification"

export const useErrorHandler = () => {
    const {addNotif} = useContext(NotifsContext)

    const handler = (error: any) => {
        const e = error as Error

        addNotif({
            id: nanoid(),
            description: e.message,
            title: e.name,
            type: 'error'
        })
    }

    return handler
}