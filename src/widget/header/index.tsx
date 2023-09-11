import React from 'react';
import HeaderChoser from './ui/header-choser';
import { userStore } from '../../store/user-store';
import PlatformLogo from './ui/platform-logo';

import './style/index.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container app-container'>
                <PlatformLogo />
                <div className='header__nav-links'>
                    <HeaderChoser
                        role={userStore.role}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;