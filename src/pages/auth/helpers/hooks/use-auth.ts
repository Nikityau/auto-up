import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useEnter } from "./use-enter";
import { AuthStore } from "../../store/auth-store";
import { AppRoutes } from "../../../../shared/app-routes";
import { CookieStore } from "../../../../local-store/cookie/cookie-store";

export const useAuth = (authStore: AuthStore, cookieStore: CookieStore) => {

  const nav = useNavigate();

  async function auth() {
    authStore.validate();
    if (authStore.error.length != 0) {

      return;
    }

    try {
      const resAuth = await axios.post(`https://rstu-skillget.ddns.net/auth/token/login/`, {
        username: authStore.login,
        password: authStore.password
      });

      const token = resAuth.data["token"];

      const resMe = await axios.get("https://rstu-skillget.ddns.net/auth/users/me/", {
        headers: {
          Authorization: `Token ${token}`
        }
      });

      const roles = resMe.data["roles"];

      if (authStore.isRem) {
        cookieStore.setCookie(token, roles, 7);
      } else {
        cookieStore.setCookie(token, roles, 0.006);
      }

      if (roles.find(r => r == "student")) {
        nav(`${AppRoutes.skillget}/${AppRoutes.student}`);
      } else {
        nav(`${AppRoutes.skillget}/${AppRoutes.lecturer}`);
      }

    } catch (err) {
      console.log("incorrect auth data");
    }
  }

  useEnter(auth);

  return {
    auth: auth
  };
};