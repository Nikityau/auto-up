import React from 'react';
import {Outlet} from 'react-router-dom'
import {observer} from "mobx-react-lite";

import Loader from "../../widget/loader";

import bg from './assets/grid.svg'


import './style/index.scss'

const BasePage = observer(() => {
    return (
        <div className='app'
             style={{
                 backgroundImage: `url(${bg})`
             }}
        >
            <Outlet/>
            <Loader/>
        </div>
    );
});

export default BasePage;