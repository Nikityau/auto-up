import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppRoutes } from '../shared/app-routes';
import AuthPage from './auth';
import BasePage from './base';
import Platform from './platform';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.skillget} element={<BasePage/>}>
                <Route path={AppRoutes.auth} element={<AuthPage/>}/>

                <Route path={AppRoutes.lecturer} element={<Platform/>}>
                    
                </Route>

                <Route path={''} element={<Navigate to={AppRoutes.auth}/>}/>
            </Route> 

            <Route path={''} element={<Navigate to={AppRoutes.skillget}/>}/>
        </Routes>
    );
};



export default AppRouter;