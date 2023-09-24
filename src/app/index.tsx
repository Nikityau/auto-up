import React from 'react';
import WithRouter from './provider/with-router';
import AppRouter from '../pages';
import NavHistory from '../procceses/nav-history';
import RouteWatcher from "../procceses/route-watcher";

import {userStore} from "../local-store/user/user-store";

import './style/vars/index.scss'
import './style/index.scss'

const App = () => {
    return (
        <WithRouter>
            <NavHistory>
                <RouteWatcher user={userStore}>
                    <AppRouter/>
                </RouteWatcher>
            </NavHistory>
        </WithRouter>
    );
};

export default App;