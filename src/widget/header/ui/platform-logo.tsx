import React from 'react';

import logo from '../assets/platform-icon.png'

const PlatformLogo = () => {
    return (
        <div className='platform-logo2'>
            <img src={logo} alt='logo'/>
            <span>Platform</span>
        </div>
    );
};

export default PlatformLogo;