import { useState } from "react"
import { Doc } from "./interface"
import { docData } from "./data"

export const useFetchDoc = () => {
    const [doc, setDoc] = useState<Doc>(() => docData)


    return doc
}