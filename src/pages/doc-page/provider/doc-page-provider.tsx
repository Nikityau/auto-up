import React from 'react';
import { useFetchDoc } from '../helpers/hooks/use-fetch-doc';
import { Doc } from '../helpers/hooks/interface';

interface DocContext {
    doc: Doc
}

export const DocPageContext = React.createContext<DocContext>(null)

const DocPageProvider = ({children}:React.PropsWithChildren) => {

    const doc = useFetchDoc()

    return (
        <DocPageContext.Provider value={{
            doc
        }}>
            {children}
        </DocPageContext.Provider>
    );
};

export default DocPageProvider;