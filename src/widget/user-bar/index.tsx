import React from 'react';

import ThemeSwitcher from "../../feature/theme-switcher";

import UserLogged from "../../enteties/user-logged";

import { cookieStore } from "../../local-store/cookie/cookie-store";

import './style/index.scss'

const UserBar = () => {
    return (
        <div className={'user-bar'}>
{/*            <ThemeSwitcher/>*/}
            <UserLogged cookieStore={cookieStore}/>
        </div>
    );
};

export default UserBar;