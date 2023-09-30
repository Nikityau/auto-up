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
import ScheduleDay from './schedule-day';
import Documentation from './doc-page';
import StudentInfo from './student-info';
import StudentCourse from "./student-course";
import StudentTimetable from "./student-timetable";

import {userStore} from "../local-store/user/user-store";
import Test from "./test";
import TestFinished from "./test-finish";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.skillget} element={<BasePage user={userStore}/>}>
                <Route path={AppRoutes.auth} element={<AuthPage/>}/>

                <Route path={AppRoutes.lecturer} element={<Platform/>}>
                    <Route path={AppRoutes.timetable} element={<Timetable/>}/>
                    <Route path={`${AppRoutes.timetable}/day/:id`} element={<ScheduleDay/>}/>
                    <Route path={AppRoutes.groups} element={<Groups/>}/>
                    <Route path={`${AppRoutes.groups}/:id`} element={<Group/>}/>
                    <Route path={`${AppRoutes.groups}/:groupId/students/:studentId`} element={<StudentInfo/>}/>
                    <Route path={AppRoutes.knowledgeBase} element={<KnowledgeBase/>}/>
                    <Route path={`${AppRoutes.knowledgeBase}/:id`} element={<Documentation/>}/>

                    <Route path={''} element={<Navigate to={AppRoutes.timetable}/>}/>
                </Route>

                <Route path={AppRoutes.student} element={<Platform/>}>
                    <Route path={AppRoutes.course} element={<StudentCourse/>}/>
                    <Route path={AppRoutes.timetable} element={<StudentTimetable/>}/>
                    <Route path={`${AppRoutes.course}/test/:id`} element={<Test/>}/>
                    <Route path={`${AppRoutes.course}/test/:id/finished`} element={<TestFinished/>}/>

                    <Route path={''} element={<Navigate to={AppRoutes.course}/>}/>
                </Route>

                <Route path={''} element={<Navigate to={AppRoutes.auth}/>}/>
            </Route> 

            <Route path={''} element={<Navigate to={AppRoutes.skillget}/>}/>
        </Routes>
    );
};



export default AppRouter;