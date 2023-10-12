import React from 'react';
import GroupsList from './ui/groups-list';
import GroupsProvider from './provider/groups-provider';
import TitleUi from '../../shared/ui/page-title';
import { loaderStore } from "../../local-store/loader/loader-store";
import { cookieStore } from "../../local-store/cookie/cookie-store";
import {errorStore} from "../../local-store/error-store";

import './style/index.scss'

const Groups = () => {
    return (
        <GroupsProvider>
            <div className='groups-page'>
                <div className='groups-page__container app-container'>
                   <TitleUi
                    title='Группы'
                   />
                    <GroupsList
                      loader={loaderStore}
                      cookie={cookieStore}
                      error={errorStore}
                    />
                </div>
            </div>
        </GroupsProvider>
    );
};

export default Groups;