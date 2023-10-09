import React from 'react';
import { observer } from "mobx-react-lite";
import { useFetchDoc } from '../helpers/hooks/use-fetch-doc';
import { IDoc } from '../helpers/hooks/interface';
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";

interface DocContext {
    doc: IDoc
}

export const DocPageContext = React.createContext<DocContext>(null)

type Props = {
    cookieStore: CookieStore,
    loaderStore: LoaderStore
} & React.PropsWithChildren

const DocPageProvider = ({children, cookieStore, loaderStore}:Props) => {

    const doc = useFetchDoc(cookieStore, loaderStore)

    return (
        <DocPageContext.Provider value={{
            doc
        }}>
            {children}
        </DocPageContext.Provider>
    );
};

export default observer(DocPageProvider);