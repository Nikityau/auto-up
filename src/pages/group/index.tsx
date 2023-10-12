import React from 'react';
import BackBtn from '../../feature/back-btn';
import Title from './ui/title';
import Students from './ui/students';
import GroupProvider from './provider/group-provider';
import { loaderStore } from "../../local-store/loader/loader-store";

import './style/index.scss'
import {errorStore} from "../../local-store/error-store";

const Group = () => {
    return (
        <GroupProvider loader={loaderStore} error={errorStore}>
            <div className='group-page'>
            <div className='group-page__container app-container'>
                <BackBtn/>
                <div className='group-page__info'>
                    <Title/>
                    <Students/>
                </div>
            </div>
        </div>
        </GroupProvider>
    );
};

export default Group;