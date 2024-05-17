import React from 'react';
import {Outlet} from "react-router-dom";
import SideBar from "../../widget/side-bar";

import './index.scss'

const Base = () => {
    return (
        <div className={'auto-up'}>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default Base;