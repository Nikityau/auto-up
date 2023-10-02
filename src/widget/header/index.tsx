import React from "react";
import { Link } from "react-router-dom";
import HeaderChoser from "./ui/header-choser";
import PlatformLogo from "./ui/platform-logo";
import { AppRoutes } from "../../shared/app-routes";
import { userStore } from "../../local-store/user/user-store";
import UserBar from "../user-bar";

import "./style/index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container app-container">
        <Link to={`/${AppRoutes.skillget}/`}>
          <PlatformLogo />
        </Link>
        <div className="header__nav-links">
          <HeaderChoser
            user={userStore}
          />
          <UserBar />
        </div>
      </div>
    </div>
  );
};

export default Header;