import React from 'react';
import Login from '../../../shared/ui/login';
import Password from '../../../shared/ui/password';
import PlatformLogo from './platorm-logo';
import Addons from './addons';
import Btn from '../../../shared/ui/btn';

const AuthForm = () => {
    return (
        <div className='auth-form'>
            <PlatformLogo/>
            <div className='auth-form__inputs'>
                <Login onChange={() => { }} />
                <Password onChange={() => { }} />
            </div>
            <Addons/>
            <Btn 
                text='Продолжить'
                onClick={() => {}}
                classNames={['auth-form__btn']}
            />
        </div>
    );
};

export default AuthForm;