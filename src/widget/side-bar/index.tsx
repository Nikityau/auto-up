import React from 'react';
import Navigation from "../navigation";
import Logo from "../../shared/ui/logo";
import UserMini from "../../entities/user-mini";

import user from './assets/img.png'

import './index.scss'

const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <Logo/>
            <Navigation/>
            <UserMini
                avatar={user}
                name={'admin1337'}
            />
        </div>
    );
};

export default SideBar;