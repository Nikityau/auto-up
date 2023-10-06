import React from 'react';
import { observer } from 'mobx-react-lite';
import HeaderStudent from './header-student';
import HeaderLecturer from './header-lecturer';
import { CookieStore } from "../../../local-store/cookie/cookie-store";

type Props = {
    cookieStore: CookieStore
}

const HeaderChoser = observer(({cookieStore}:Props) => {

    if(cookieStore.roles == 'student') {
        return <HeaderStudent/>
    }

    return <HeaderLecturer/>
});

export default HeaderChoser