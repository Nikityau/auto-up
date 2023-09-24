import React from 'react';
import { observer } from 'mobx-react-lite';
import HeaderStudent from './header-student';
import HeaderLecturer from './header-lecturer';
import {UserStore} from "../../../local-store/user/user-store";

type Props = {
    user: UserStore
}

const HeaderChoser = observer(({user}:Props) => {
    return (
        <>
            {
                user.role == 'student'
                ? <HeaderStudent/>
                : <HeaderLecturer/>
            }
        </>
    );
});

export default HeaderChoser