import React from 'react';
import {observer} from "mobx-react-lite";
import {AuthStore} from "../store/auth-store";

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