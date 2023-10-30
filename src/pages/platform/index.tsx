import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widget/header";
import SupportIcon from "../../widget/support-icon";

import { cookieStore } from "../../local-store/cookie/cookie-store";
import { useFetchInterceptor } from "./helpers/hooks/use-fetch-interceptor";

import "./style/index.scss";

const Platform = () => {

  useFetchInterceptor()

  return (
    <>
      <Header cookie={cookieStore}/>
      <div className="platform">
        <Outlet />
        {/* <SupportIcon /> */}
      </div>
    </>
  );
};

export default Platform;