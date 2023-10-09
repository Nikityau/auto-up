import React, { useContext } from 'react';
import TitleUi from '../../../shared/ui/page-title';
import { DocPageContext } from '../provider/doc-page-provider';

const Title = () => {

    const context = useContext(DocPageContext)


    return (
        <TitleUi
            title={context?.doc?.title}
        />
    );
};

export default Title;