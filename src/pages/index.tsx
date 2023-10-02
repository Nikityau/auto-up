import React, {Suspense} from 'react';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { AppRoutes } from '../shared/app-routes';
import BasePage from './base';
import Platform from './platform';

import {userStore} from "../local-store/user/user-store";
import StudentTest from "./student-test";

const StudentCourseLazy = React.lazy(() => import('./student-course'))
const StudentTimetableLazy = React.lazy(() => import('./student-timetable'))
const AuthPageLazy = React.lazy(() => import('./auth'))
const TimetableLazy = React.lazy(() => import('./timetable'))
const GroupsLazy = React.lazy(() => import('./groups'))
const GroupLazy = React.lazy(() => import('./group'))
const KnowledgeBaseLazy = React.lazy(() => import('./knowledge-base'))
const ScheduleDayLazy = React.lazy(() => import('./schedule-day'))
const DocumentationLazy = React.lazy(() => import('./doc-page'))
const StudentInfoLazy = React.lazy(() => import('./student-info'))

const AppRouter = () => {
    return (
       <Suspense fallback={'...loading'}>
           <Routes>
               <Route path={AppRoutes.skillget} element={<BasePage user={userStore}/>} >
                   <Route path={AppRoutes.auth} element={<AuthPageLazy/>}/>

                   <Route path={AppRoutes.lecturer} element={<Platform/>}>
                       <Route path={AppRoutes.timetable} element={<TimetableLazy/>}/>
                       <Route path={`${AppRoutes.timetable}/day/:id`} element={<ScheduleDayLazy/>}/>
                       <Route path={AppRoutes.groups} element={<GroupsLazy/>}/>
                       <Route path={`${AppRoutes.groups}/:id`} element={<GroupLazy/>}/>
                       <Route path={`${AppRoutes.groups}/:groupId/students/:studentId`} element={<StudentInfoLazy/>}/>
                       <Route path={AppRoutes.knowledgeBase} element={<KnowledgeBaseLazy/>}/>
                       <Route path={`${AppRoutes.knowledgeBase}/:id`} element={<DocumentationLazy/>}/>

                       <Route path={''} element={<Navigate to={AppRoutes.timetable}/>}/>
                   </Route>

                   <Route path={AppRoutes.student} element={<Platform/>}>
                       <Route path={AppRoutes.course} element={<StudentCourseLazy/>}/>
                       <Route path={AppRoutes.timetable} element={<StudentTimetableLazy/>}/>
                       <Route path={`${AppRoutes.course}/${AppRoutes.test}/:id`} element={<StudentTest/>}/>

                       <Route path={''} element={<Navigate to={AppRoutes.course}/>}/>
                   </Route>

                   <Route path={''} element={<Navigate to={AppRoutes.auth}/>}/>
               </Route>

               <Route path={''} element={<Navigate to={AppRoutes.skillget}/>}/>
           </Routes>
       </Suspense>
    );
};



export default AppRouter;