import React from "react";
import { observer } from "mobx-react-lite";

import Checkbox from "../../../shared/ui/checkbox";
import { AuthStore } from "../store/auth-store";

type Props = {
  authStore: AuthStore
}

const Addons = observer(({ authStore }: Props) => {
  return (
    <div className="auth-form__addon-info">
      <Checkbox
        state={false}
        text={'Запомнить'}
        onChange={(value) => {
          authStore.setIsRem(value);
        }} />
      <div className="auth-form__forgot-password">
        <span>Забыли пароль?</span>
      </div>
    </div>
  );
});

export default Addons;