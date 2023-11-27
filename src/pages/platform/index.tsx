import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widget/header";
import NotifcationBar from "../../widget/notification-bar";
import { useFetchGroupsInfo } from "../../shared/helpers/hooks/use-fetch-groups-info";

import { useFetchInterceptor } from "./helpers/hooks/use-fetch-interceptor";

import "./style/index.scss";

const Platform = () => {

  useFetchInterceptor()
  useFetchGroupsInfo()

  return (
    <>
      <Header/>
      <div className="platform">
        <Outlet />
        <NotifcationBar/>
        {/* <SupportIcon /> */}
      </div>
    </>
  );
};

export default Platform;