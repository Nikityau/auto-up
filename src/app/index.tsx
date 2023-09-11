import React from 'react';
import WithRouter from './provider/with-router';
import AppRouter from '../pages';

import './style/vars/index.scss'
import './style/index.scss'

const App = () => {
    return (
       <WithRouter>
            <AppRouter/>
       </WithRouter>
    );
};

export default App;