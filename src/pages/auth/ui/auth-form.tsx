import React from "react";
import { observer } from "mobx-react-lite";

import Addons from "./addons";
import PlatformLogo from "./platorm-logo";

import Btn from "../../../shared/ui/btn";

import LoginErrorProvider from "../provider/login-error.provider";
import AuthProvider from "../provider/auth-provider";
import PasswordErrorProvider from "../provider/password-error.provider";

import { useAuth } from "../helpers/hooks/use-auth";

import { AuthStore } from "../store/auth-store";
import { CookieStore } from "../../../local-store/cookie/cookie-store";

type Props = {
  authStore: AuthStore,
  cookieStore: CookieStore
}

const AuthForm = observer(({authStore, cookieStore}:Props) => {

  const {auth} = useAuth(authStore, cookieStore)

  return (
    <AuthProvider>
      <div className="auth-form">
        <PlatformLogo />
        <div className="auth-form__inputs">
          <LoginErrorProvider auth={authStore}/>
          <PasswordErrorProvider auth={authStore}/>
        </div>
        <Addons authStore={authStore}/>
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