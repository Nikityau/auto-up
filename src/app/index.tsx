import React from "react";

import BrowserProvider from "./provider/browser-provider";
import AppPages from "../pages";

import './style/index.scss'

const App = () => {

    return (
        <BrowserProvider>
            <AppPages/>
        </BrowserProvider>
    );
};

export default App;