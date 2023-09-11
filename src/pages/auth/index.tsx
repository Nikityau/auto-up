import React from 'react';
import AuthForm from './ui/auth-form';
import FoldersIcon from '../../shared/ui/folders-icon';
import Sponsors from './ui/sponsors';

import bg from './assets/bg-wave.svg'
import bggrid from '../base/assets/grid.svg'

import './style/index.scss'

const AuthPage = () => {
    return (
        <div className='auth-page'
            style={{
                
            }}
        >
            <div className='auth-page__bg-wave'
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
            <div className='auth-page__bg-grid'
                style={{
                    backgroundImage: `url(${bggrid})`
                }}
            />
            </div>
            <div className='auth-page__container'>
                <div className='auth-page__up'>
                    <AuthForm/>
                    <FoldersIcon classNames={['auth-page__folders']}/>
                </div>
                {/* <Sponsors/> */}
            </div>
        </div>
    );
};

export default AuthPage;