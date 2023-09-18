import React from 'react';
import WithRouter from './provider/with-router';
import AppRouter from '../pages';
import NavHistory from '../procceses/nav-history';

import './style/vars/index.scss'
import './style/index.scss'

const App = () => {
    return (
        <WithRouter>
            <NavHistory>
                <AppRouter />
            </NavHistory>
        </WithRouter>
    );
};

export default App;