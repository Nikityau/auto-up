import React from 'react';

import BackBtn from '../../feature/back-btn';
import Title from './ui/title';
import Students from './ui/students';
import GroupProvider from './provider/group-provider';


import './style/desktop/index.scss'
import './style/print/index.scss'

const Group = () => {

    return (
        <GroupProvider >
            <div className='group-page'>
                <div className='group-page__container app-container'>
                    <div className={'group-page__up-container'}>
                        <BackBtn/>
                       {/* <div className={'group-page__print-btn'} onClick={window.print}>
                            <p>Печать</p>
                        </div>*/}
                    </div>
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