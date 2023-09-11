import React from 'react';
import {Outlet} from 'react-router-dom'

import bg from './assets/grid.svg'

import './style/index.scss'

const BasePage = () => {
    return (
        <div className='app'
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <Outlet/>
        </div>
    );
};

export default BasePage;