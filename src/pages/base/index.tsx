import React from 'react';
import {Outlet} from 'react-router-dom'

import Loader from "../../widget/loader";
import ThemeProvider from "./provider/theme-provider";

import './style/index.scss'

const BasePage =() => {
    return (
        <ThemeProvider>
            <Outlet/>
            <Loader/>
        </ThemeProvider>
    );
};

export default BasePage;