import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppRoutes } from '../shared/app-routes';
import AuthPage from './auth';
import BasePage from './base';
import Platform from './platform';
import Timetable from './timetable';
import Groups from './groups';
import KnowledgeBase from './knowledge-base';
import Group from './group';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.skillget} element={<BasePage/>}>
                <Route path={AppRoutes.auth} element={<AuthPage/>}/>

                <Route path={AppRoutes.lecturer} element={<Platform/>}>
                    <Route path={AppRoutes.timetable} element={<Timetable/>}/>
                    <Route path={AppRoutes.groups} element={<Groups/>}/>
                    <Route path={`${AppRoutes.groups}/:id`} element={<Group/>}/>
                    <Route path={AppRoutes.knowledgeBase} element={<KnowledgeBase/>}/>
                    <Route path={`${AppRoutes.knowledgeBase}/:id`} element={'course'}/>

                    <Route path={''} element={<Navigate to={AppRoutes.timetable}/>}/>
                </Route>

                <Route path={''} element={<Navigate to={AppRoutes.auth}/>}/>
            </Route> 

            <Route path={''} element={<Navigate to={AppRoutes.skillget}/>}/>
        </Routes>
    );
};



export default AppRouter;