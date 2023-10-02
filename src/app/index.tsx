import React from "react";
import AppRouter from "../pages";
import WithRouter from "./provider/with-router";
import NavHistory from "../procceses/nav-history";
import AccessManger from "../procceses/access-manager";

import { userStore } from "../local-store/user/user-store";

import "./style/vars/index.scss";
import "./style/index.scss";

const App = () => {
  return (
    <WithRouter>
      <NavHistory>
        <AccessManger userStore={userStore}>
          <AppRouter />
        </AccessManger>
      </NavHistory>
    </WithRouter>
  );
};

export default App;