import React from "react";
import AppRouter from "../pages";

import WithRouter from "./provider/with-router";
import WithQuery from "./provider/with-query";
import WithNotification from "./provider/with-notification";
import WithLoader from "./provider/with-loader";

import AccessManger from "../procceses/access-manager";

import "./style/vars/index.scss";
import "./style/index.scss";

const App = () => {

    return (
        <AccessManger>
            <WithLoader>
                <WithNotification>
                    <AppRouter/>
                </WithNotification>
            </WithLoader>
        </AccessManger>
    );
};

export default WithQuery(WithRouter(<App/>)());