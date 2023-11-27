import React from "react";
import { observer } from "mobx-react-lite";

import Addons from "./addons";
import PlatformLogo from "./platorm-logo";

import Btn from "../../../shared/ui/btn";

import LoginErrorProvider from "../provider/login-error.provider";
import AuthProvider from "../provider/auth-provider";
import PasswordErrorProvider from "../provider/password-error.provider";

import { useAuth } from "../helpers/hooks/use-auth";
import AuthError from "./auth-error";
import { AuthStore } from "../store/auth-store";


type Props = {
  authStore: AuthStore,
}

const AuthForm = observer(({authStore}:Props) => {

  const {auth} = useAuth(authStore)

  return (
    <AuthProvider>
      <div className="auth-form">
        <PlatformLogo />
        <div className="auth-form__inputs">
          <LoginErrorProvider auth={authStore}/>
          <PasswordErrorProvider auth={authStore}/>
        </div>
        <AuthError authStore={authStore}/>
        {/*<Addons authStore={authStore}/>*/}
        <Btn
          text="Продолжить"
          onClick={() => auth()}
          classNames={["auth-form__btn"]}
        />
      </div>
    </AuthProvider>
  );
});

export default AuthForm;