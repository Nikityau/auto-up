import React from "react";
import {Link} from "react-router-dom";
import HeaderChoser from "./ui/header-choser";
import PlatformLogo from "./ui/platform-logo";
import {AppRoutes} from "../../shared/app-routes";
import UserBar from "../user-bar";

import "./style/index.scss";
import {CookieStore, cookieStore} from "../../local-store/cookie/cookie-store";
import {observer} from "mobx-react-lite";

type Props = {
    cookie: CookieStore
}

const Header = observer(({cookie}: Props) => {
    return (
        <div className="header">
            <div className="header__container app-container">
                <PlatformLogo/>
                <div className="header__nav-links">
                    <HeaderChoser
                        cookieStore={cookie}
                    />
                    <UserBar/>
                </div>
            </div>
        </div>
    );
});

export default Header;