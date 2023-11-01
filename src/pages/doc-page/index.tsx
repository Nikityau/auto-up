import React from 'react';

import BackBtn from '../../feature/back-btn';
import DocPageProvider from './provider/doc-page-provider';
import { loaderStore } from "../../local-store/loader/loader-store";
import Doc from './ui/doc';
import Title from './ui/title';

import './style/index.scss'

const Documentation = () => {
    return (
       <DocPageProvider loaderStore={loaderStore}>
         <div className='doc-page'>
            <div className='doc-page__container app-container'>
                <div className='doc-page__title'>
                    <BackBtn/>
                    <Title/>
                </div>
                <Doc/>
            </div>
        </div>
       </DocPageProvider>
    );
};

export default Documentation;