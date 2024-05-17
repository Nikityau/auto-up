import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "../../shared/ui/button/button";

import './index.scss'

const AuthPage = () => {

    const {
        hash
    } = useLocation()

    const nav = useNavigate()

    const isAuth = hash.includes('auth')


    return (
        <div className={'auth'}>
            <div className={'auth__form'}>
                <h2>{isAuth ? 'Авторизация' : 'Регистрация'}</h2>

                <div className={'auth__form-inputs'}>
                    <input
                        placeholder={isAuth ? 'Логин' : 'Имя пользователя'}
                    />
                    {
                        !isAuth &&
                        <input
                            type={'date'}
                            placeholder={'26.10.2002'}
                        />
                    }
                    {
                        !isAuth &&
                        <input
                            placeholder={'Электронная почта / номер телефона'}
                        />
                    }
                    <input
                        type={'password'}
                        placeholder={'Пароль'}
                    />
                </div>

                <Button
                    text={isAuth ? 'Войти' : 'Зарегистрироваться'}
                    onClick={() => {
                        nav('/auto-up/inside')
                    }}
                    classNames={'button-ui_theme_blue'}
                />
                <Link to={`/auto-up/auth#${isAuth ? 'reg' : 'auth'}`}>
                    {isAuth ? 'зарегистрироваться' : 'авторизоваться'}
                </Link>
            </div>
        </div>
    );
};

export default AuthPage;