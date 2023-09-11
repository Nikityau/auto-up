import React from 'react';
import Switcher from '../../../shared/ui/switcher';

const Addons = () => {
    return (
        <div className='auth-form__addon-info'>
            <Switcher
                init={true}
                text='Запомнить'
                onChange={() => { }}
            />
            <div className='auth-form__forgot-password'>
                <span>Забыли пароль?</span>
            </div>
        </div>
    );
};

export default Addons;