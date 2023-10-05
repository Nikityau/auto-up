import React from 'react';
import {useNavigate} from "react-router-dom";
import { observer } from "mobx-react-lite";

import {AppRoutes} from "../../shared/app-routes";

import './style/index.scss'
import { CookieStore } from "../../local-store/cookie/cookie-store";

type Props = {
    cookieStore: CookieStore
}

const UserLogged = observer(({cookieStore}:Props) => {

    const nav = useNavigate()

    const toAuth = () => {
        nav(`/${AppRoutes.skillget}`)
        cookieStore.dispose()
    }

    return (
      <div className={'user-logged'} onClick={toAuth}>
      </div>
    );
});

export default UserLogged;