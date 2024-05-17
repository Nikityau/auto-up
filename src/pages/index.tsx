import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Auth from "./auth";
import Base from "./base/base";
import Statistic from "./statistic";
import Users from "./users";
import AllFiles from "./all-files";
import UserFiles from "./user";
import UploadFile from "./upload-file";

const AppPages = () => {
    return (
        <Routes>
            <Route path={'/auto-up'}>
                <Route path={'auth'} element={<Auth/>}/>
                <Route path={'reg'} element={<Auth/>}/>

                <Route path={'inside'} element={<Base/>}>
                    <Route path={'statistic'} element={<Statistic/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'users/:id'} element={<UserFiles/>}/>
                    <Route path={'all-files'} element={<AllFiles/>}/>
                    <Route path={'upload-files'} element={<UploadFile/>}/>

                    <Route path={''} element={<Navigate to={'statistic'}/>}/>
                </Route>

                <Route path={''} element={<Navigate to={'auth#auth'}/>}/>
            </Route>

            <Route path={'/'} element={<Navigate to="/auto-up"/>}/>
        </Routes>
    );
};

export default AppPages;