import React from 'react';
import { observer } from "mobx-react-lite";
import { useFetchDoc } from '../helpers/hooks/use-fetch-doc';
import { IDoc } from '../helpers/hooks/interface';
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

interface DocContext {
    doc: IDoc
}

export const DocPageContext = React.createContext<DocContext>(null)

type Props = {
    loaderStore: LoaderStore,
} & React.PropsWithChildren

const DocPageProvider = ({children, loaderStore}:Props) => {

    const doc = useFetchDoc(loaderStore)

    return (
        <DocPageContext.Provider value={{
            doc
        }}>
            {children}
        </DocPageContext.Provider>
    );
};

export default observer(DocPageProvider);