import React from "react";
import AppRouter from "../pages";

import WithRouter from "./provider/with-router";
import WithQuery from "./provider/with-query";
import WithNotification from "./provider/with-notification";

import AccessManger from "../procceses/access-manager";

import { userStore } from "../local-store/user/user-store";
import { cookieStore } from "../local-store/cookie/cookie-store";

import "./style/vars/index.scss";
import "./style/index.scss";

const App = () => {

    return (
        <AccessManger
            userStore={userStore}
            cookieStore={cookieStore}
        >
            <WithNotification>
                <AppRouter />
            </WithNotification>
        </AccessManger>
    );
};

export default WithQuery(WithRouter(<App />)());