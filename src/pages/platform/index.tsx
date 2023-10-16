import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widget/header";
import SupportIcon from "../../widget/support-icon";

import "./style/index.scss";
import Loader from "../../widget/loader";
import { cookieStore } from "../../local-store/cookie/cookie-store";

const Platform = () => {
  return (
    <>
      <Header cookie={cookieStore}/>
      <div className="platform">
        <Outlet />
        {/*<SupportIcon />*/}
      </div>
    </>
  );
};

export default Platform;