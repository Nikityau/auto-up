import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserStore } from "../../../../local-store/user/user-store";
import { AppRoutes } from "../../../../shared/app-routes";

const accessRoutes = {
  "lecturer": [
    "admin",
    "lecturer",
    "moderator",
    "superuser",
    "teacher"
  ],
  "student": [
    "student"
  ]
};


export const useManage = (userStore: UserStore) => {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("lecturer")) {
      if (accessRoutes.lecturer.find(el => el == userStore.role)) {
        return;
      } else {
        nav(`/${AppRoutes.skillget}/error/403`);
        return;
      }
    }
    if (location.pathname.includes("student")) {
      if (accessRoutes.student.find(el => el == userStore.role)) {
        return;
      } else {
        nav(`/${AppRoutes.skillget}/error/403`);
        return;
      }
    }
  }, [location]);
};