import React from "react";
import { AuthStore } from "../store/auth-store";
import { observer } from "mobx-react-lite";
import Password from "../../../shared/ui/password";

type Props = {
  auth: AuthStore
}

const PasswordErrorProvider = observer(({auth}:Props) => {
  return (
    <>
      <Password
        isError={Boolean(auth.error.find(err => err.where == 'password'))}
        onChange={(password) => auth.setPassword(password)}
      />
    </>
  );
});

export default PasswordErrorProvider;