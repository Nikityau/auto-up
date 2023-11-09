import React from 'react';
import { observer } from "mobx-react-lite";
import { useFetchDoc } from '../helpers/hooks/use-fetch-doc';
import { IDoc } from '../helpers/hooks/interface';


interface DocContext {
    doc: IDoc
}

export const DocPageContext = React.createContext<DocContext>(null)

type Props = {
} & React.PropsWithChildren

const DocPageProvider = ({children}:Props) => {

    const doc = useFetchDoc()

    return (
        <DocPageContext.Provider value={{
            doc
        }}>
            {children}
        </DocPageContext.Provider>
    );
};

export default observer(DocPageProvider);