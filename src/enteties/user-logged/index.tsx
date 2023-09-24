import React from 'react';
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../shared/app-routes";

import './style/index.scss'

const UserLogged = () => {

    const nav = useNavigate()

    const toAuth = () => {
        nav(`/${AppRoutes.skillget}`)
    }

    return (
        <div className={'user-logged'} onClick={toAuth}>
        </div>
    );
};

export default UserLogged;