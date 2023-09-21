import React from 'react';
import HeaderChoser from './ui/header-choser';
import { userStore } from '../../store/user-store';
import PlatformLogo from './ui/platform-logo';
import { Link } from 'react-router-dom';

import './style/index.scss'
import { baseLecturer } from '../../shared/app-routes';



const Header = () => {
    return (
        <div className='header'>
            <div className='header__container app-container'>
                <Link to={baseLecturer}>
                    <PlatformLogo />
                </Link>
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