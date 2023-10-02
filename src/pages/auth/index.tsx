import React from 'react';
import AuthForm from './ui/auth-form';
import FoldersIcon from '../../shared/ui/folders-icon';

import './style/index.scss'

const AuthPage = () => {
    return (
        <div className='auth-page'>
            <div className='auth-page__container'>
                <div className='auth-page__up'>
                    <AuthForm />
                    <FoldersIcon classNames={['auth-page__folders']} />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;