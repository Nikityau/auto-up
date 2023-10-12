import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleUi from "../../shared/ui/page-title";

import './style/index.scss'

const error = {
  "403": "Друг, тебе сюда нельзя!",
  "404": "Ты наверное перепутал",
  "500": "Харош, сервер не знает это или вообще ЛЕГ!!!"
};

const Error = () => {

  const { name } = useParams();

  const nav = useNavigate()

  const goHome = () => {
    nav('/')
  }

  return (
    <div className={"error-page"}>
      <div className={"error-handler-page__container app-container"}>
        <TitleUi title={`Error ${name}`} />
        <div className={"error-page__text"}>
          <span>{error[name]}</span>
        </div>
        <div className={'error-page__home'} onClick={goHome}>
          <span>Домой</span>
        </div>
      </div>
    </div>
  );
};

export default Error;