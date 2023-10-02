import React from 'react';

import logo_img from '../assets/logo3.svg'

const PlatformLogo = () => {
    return (
        <div className='platform-logo'>
            <img src={logo_img} alt={'logo'}/>
            <div className='platform-logo__title'>
                <span>Platfrom</span>
            </div>
        </div>
    );
};

export default PlatformLogo;