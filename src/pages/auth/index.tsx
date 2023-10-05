import React from "react";
import AuthForm from "./ui/auth-form";

import { AuthStore } from "./store/auth-store";
import { cookieStore } from "../../local-store/cookie/cookie-store";

import py from './assets/py-icon.png'

import "./style/index.scss";

const authStore = new AuthStore()

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <div className={"auth-page__left-side"}>
          <AuthForm
            authStore={authStore}
            cookieStore={cookieStore}
          />
        </div>
        <div className={'auth-page__logo'}>
          <img src={py} alt={'py-icon'}/>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;