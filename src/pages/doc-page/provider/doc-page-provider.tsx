import React from 'react';
import { observer } from "mobx-react-lite";
import { useFetchDoc } from '../helpers/hooks/use-fetch-doc';
import { IDoc } from '../helpers/hooks/interface';
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

interface DocContext {
    doc: IDoc
}

export const DocPageContext = React.createContext<DocContext>(null)

type Props = {
    cookieStore: CookieStore,
    loaderStore: LoaderStore,
    error: ErrorStore
} & React.PropsWithChildren

const DocPageProvider = ({children, cookieStore, loaderStore, error}:Props) => {

    const doc = useFetchDoc(cookieStore, loaderStore, error)

    return (
        <DocPageContext.Provider value={{
            doc
        }}>
            {children}
        </DocPageContext.Provider>
    );
};

export default observer(DocPageProvider);