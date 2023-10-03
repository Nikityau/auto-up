import React from "react";
import AuthForm from "./ui/auth-form";

import py from './assets/py-icon.png'
import { authStore } from "./store";

import "./style/index.scss";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <div className={"auth-page__left-side"}>
          <AuthForm authStore={authStore}/>
        </div>
        <div className={'auth-page__logo'}>
          <img src={py} alt={'py-icon'}/>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;