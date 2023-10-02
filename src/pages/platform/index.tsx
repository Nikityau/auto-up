import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widget/header';
import SupportIcon from "../../widget/support-icon";

import './style/index.scss'

const Platform = () => {
    return (
        <>
            <Header />
            <div className='platform'>
                <Outlet />
                <SupportIcon/>
            </div>
        </>
    );
};

export default Platform;