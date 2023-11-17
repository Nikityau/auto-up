import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppRoutes } from "../../../../shared/app-routes";
import { accessRoutes } from "../../../../shared/data/access-routes";
import Cookies from "js-cookie";

export const useManage = () => {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token')
    const roles = Cookies.get('roles')

    if (location.pathname.includes("auth")) {
      if (!token) {
        return
      }

      if (roles == "student") {
        nav(`/${AppRoutes.skillget}/${AppRoutes.student}`)
      }
      if (accessRoutes.lecturer.find(ar => ar == roles)) {
        nav(`/${AppRoutes.skillget}/${AppRoutes.lecturer}`)
      }
    }
  }, []);
};