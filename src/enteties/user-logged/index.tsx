import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

import {AppRoutes} from "../../shared/app-routes";
import {CookieStore} from "../../local-store/cookie/cookie-store";

import './style/index.scss'

type Props = {
    cookieStore: CookieStore
}

const UserLogged = observer(({cookieStore}: Props) => {

    const nav = useNavigate()

    const toAuth = () => {
        cookieStore.dispose()
        nav(`/${AppRoutes.skillget}`)
    }

    return (
        <div className={'user-logged'} onClick={toAuth}>
            <span>Выйти</span>
        </div>
    );
});

export default UserLogged;