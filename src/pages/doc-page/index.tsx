import React from 'react';
import BackBtn from '../../feature/back-btn';
import DocPageProvider from './provider/doc-page-provider';
import { cookieStore } from "../../local-store/cookie/cookie-store";
import { loaderStore } from "../../local-store/loader/loader-store";
import Doc from './ui/doc';
import Title from './ui/title';

import './style/index.scss'
import {errorStore} from "../../local-store/error-store";

const Documentation = () => {
    return (
       <DocPageProvider cookieStore={cookieStore} loaderStore={loaderStore} error={errorStore}>
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