import React from 'react';
import {useNavigate} from "react-router-dom";

import {AppRoutes} from "../../shared/app-routes";

import './style/index.scss'

type Props = {
}

const UserLogged = ({}: Props) => {

    const nav = useNavigate()

    const toAuth = () => {
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-role')
        nav(`/${AppRoutes.skillget}`)
    }

    return (
        <div className={'user-logged'} onClick={toAuth}>
            <span>Выйти</span>
        </div>
    );
};

export default UserLogged;