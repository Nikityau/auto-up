import React from 'react';
import {AuthStore} from "../store/auth-store";
import {observer} from "mobx-react-lite";

type Props = {
    authStore: AuthStore
}

const AuthError = observer(({authStore}:Props) => {
    if(!authStore.isFetchError) return

    return (
        <div className={'auth-error'}>
            <span>Проверьте правильности логина или пароля</span>
        </div>
    );
});

export default AuthError;