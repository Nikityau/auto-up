import React from 'react';
import Switcher from '../../../shared/ui/switcher';
import AuthSwitcher from './auth-switcher';
import { authStore } from '../store';
import { observer } from 'mobx-react-lite';

const Addons = () => {
    return (
        <div className='auth-form__addon-info'>
            <AuthSwitcher
                state={authStore.isRemember}
                onChagnge={() => {
                    authStore.switchRemember()
                }}
            />
            <div className='auth-form__forgot-password'>
                <span>Забыли пароль?</span>
            </div>
        </div>
    );
};

export default Addons;