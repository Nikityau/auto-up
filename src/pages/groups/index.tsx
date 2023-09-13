import React from 'react';
import GroupsList from './ui/groups-list';
import GroupsProvider from './provider/groups-provider';
import PageTitle from '../../shared/ui/page-title';

import './style/index.scss'

const Groups = () => {
    return (
        <GroupsProvider>
            <div className='groups-page'>
                <div className='groups-page__container app-container'>
                   <PageTitle
                    title='Группы'
                   />
                    <GroupsList />
                </div>
            </div>
        </GroupsProvider>
    );
};

export default Groups;