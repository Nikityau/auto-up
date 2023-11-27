import React from "react";
import HeaderChoser from "./ui/header-choser";
import PlatformLogo from "./ui/platform-logo";
import UserBar from "../user-bar";

import "./style/index.scss";

type Props = {
}

const Header = ({}: Props) => {
    return (
        <div className="header">
            <div className="header__container app-container">
                <PlatformLogo/>
                <div className="header__nav-links">
                    <HeaderChoser/>
                    <UserBar/>
                </div>
            </div>
        </div>
    );
};

export default Header;