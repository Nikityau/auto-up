import React, {useState} from 'react';
import produce from "immer";

export type UID = string

export type UIDObject = {
    uid: UID
}

interface ILoaderContext {
    loadList: UID[],

    add(uid: UID): void
    remove(uid: UID): void
}

export const LoaderContext = React.createContext<ILoaderContext>(null)

const WithLoader = ({children}:React.PropsWithChildren) => {
    const [list, setList] = useState<UID[]>(null)

    const add = (uid: UID) => {
        setList((prev) => {
            if(!prev) return [uid]

            return produce(prev, draft => {
                draft.push(uid)

                return draft
            })
        })
    }
    const remove = (uid: UID) => {
        setList((prev) => {
            if(!prev) return null

            return produce(prev, draft => {
                draft = draft.filter(_uid => _uid != uid)

                if(draft.length == 0) {
                   draft = null
                }

                return draft
            })
        })
    }

    return (
        <LoaderContext.Provider value={{
            loadList: list,
            add,
            remove
        }}>
            {children}
        </LoaderContext.Provider>
    );
};

export default WithLoader;