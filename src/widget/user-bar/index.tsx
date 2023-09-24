import React from 'react';
import ThemeSwitcher from "../../feature/theme-switcher";
import UserLogged from "../../enteties/user-logged";

import './style/index.scss'

const UserBar = () => {
    return (
        <div className={'user-bar'}>
            <ThemeSwitcher/>
            <UserLogged/>
        </div>
    );
};

export default UserBar;