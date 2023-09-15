import React, { useContext } from 'react';
import PageTitle from '../../../shared/ui/page-title';
import { DocPageContext } from '../provider/doc-page-provider';

const Title = () => {

    const context = useContext(DocPageContext)


    return (
        <PageTitle
            title={context.doc.title}
        />
    );
};

export default Title;