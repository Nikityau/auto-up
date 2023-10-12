import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserStore } from "../../../../local-store/user/user-store";
import { AppRoutes } from "../../../../shared/app-routes";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";

export const accessRoutes = {
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


export const useManage = (userStore: UserStore, cookieStore: CookieStore) => {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    console.log('here');
    if (location.pathname.includes("auth")) {
      if (!cookieStore.token) {
        return
      }

      if (cookieStore.roles == "student") {
        nav(`/${AppRoutes.skillget}/${AppRoutes.student}`)
      }
      if (accessRoutes.lecturer.find(ar => ar == cookieStore.roles)) {
        nav(`/${AppRoutes.skillget}/${AppRoutes.lecturer}`)
      }
    }
  }, []);

  useEffect(() => {
    if (!cookieStore.token) {
      nav(`/${AppRoutes.skillget}`);
    }
  }, [cookieStore]);

  useEffect(() => {
    const roles = cookieStore.roles;
    const token = cookieStore.token;

    /*if (location.pathname.includes("lecturer")) {
      if (accessRoutes.lecturer.find(el => el == userStore.role)) {
        return;
      } else {
        nav(`/${AppRoutes.skillget}/error-handler/403`);
        return;
      }
    }
    if (location.pathname.includes("student")) {
      if (accessRoutes.student.find(el => el == userStore.role)) {
        return;
      } else {
        nav(`/${AppRoutes.skillget}/error-handler/403`);
        return;
      }
    }*/
  }, [location]);
};