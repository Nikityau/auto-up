import React from "react";
import { observer } from "mobx-react-lite";
import { AuthStore } from "../store/auth-store";
import Login from "../../../shared/ui/login";


type Props = {
  auth: AuthStore
}

const LoginErrorProvider = observer(({auth}:Props) => {

  return (
    <>
      <Login
        isError={Boolean(auth.error.find(err => err.where == 'login'))}
        onChange={(login) => {
          auth.setLogin(login)
        }}
      />
    </>
  );
});

export default LoginErrorProvider;