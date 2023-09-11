import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widget/header';

const Platform = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Platform;