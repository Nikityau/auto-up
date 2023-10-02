import React from "react";
import SupportIconProvider from "./provider/support-icon-provider";

import SuppIcon from "./ui/supp-icon";
import Links from "./ui/links";

import "./style/index.scss";


const SupportIcon = () => {
  return (
    <SupportIconProvider>
      <div className={"support-icon"}>
        <SuppIcon/>
        <Links/>
      </div>
    </SupportIconProvider>
  );
};

export default SupportIcon;