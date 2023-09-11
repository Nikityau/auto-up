import React from 'react';
import Login from '../../../shared/ui/login';
import Password from '../../../shared/ui/password';
import PlatformLogo from './platorm-logo';
import Addons from './addons';
import Btn from '../../../shared/ui/btn';
import { authStore } from '../store';
import AuthProvider from '../provider/auth-provider';

const AuthForm = () => {
    return (
        <AuthProvider>
            <div className='auth-form'>
            <PlatformLogo/>
            <div className='auth-form__inputs'>
                <Login
                    onChange={(login) => authStore.setLogin(login)}
                />
                <Password
                    onChange={(password) => authStore.setPassword(password)} 
                />
            </div>
            <Addons/>
            <Btn 
                text='Продолжить'
                onClick={() => authStore.auth()}
                classNames={['auth-form__btn']}
            />
        </div>
        </AuthProvider>
    );
};

export default AuthForm;