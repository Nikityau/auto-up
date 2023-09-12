import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widget/header';

import './style/index.scss'

const Platform = () => {
    return (
        <>
            <Header />
            <div className='platform'>
                <Outlet />
            </div>
        </>
    );
};

export default Platform;