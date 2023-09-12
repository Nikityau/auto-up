import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppRoutes } from '../shared/app-routes';
import AuthPage from './auth';
import BasePage from './base';
import Platform from './platform';
import Timetable from './timetable';
import TimetableMonth from '../feature/timetable-month';
import TimetableWeek from '../feature/timetable-week';
import TimetableDay from '../feature/timetable-day';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.skillget} element={<BasePage/>}>
                <Route path={AppRoutes.auth} element={<AuthPage/>}/>

                <Route path={AppRoutes.lecturer} element={<Platform/>}>
                    <Route path={AppRoutes.timetable} element={<Timetable/>}/>

                    <Route path={''} element={<Navigate to={AppRoutes.timetable}/>}/>
                </Route>

                <Route path={''} element={<Navigate to={AppRoutes.auth}/>}/>
            </Route> 

            <Route path={''} element={<Navigate to={AppRoutes.skillget}/>}/>
        </Routes>
    );
};



export default AppRouter;