import {useNavigate} from "react-router-dom";
import axios from "axios";

import {useEnter} from "./use-enter";
import {AuthStore} from "../../store/auth-store";
import {AppRoutes} from "../../../../shared/app-routes";
import {baseUrl} from "../../../../shared/api/base-url";
import {accessRoutes} from "../../../../shared/data/access-routes";

export const useAuth = (authStore: AuthStore) => {

    const nav = useNavigate();

    async function auth() {
        authStore.validate();
        if (authStore.error.length != 0) {

            return;
        }

        try {
            authStore.setIsFetchError(false)

            const resAuth = await axios.post(`${baseUrl}/auth/token/login/`, {
                username: authStore.login,
                password: authStore.password
            });

            const token = resAuth.data["auth_token"];

            const resMe = await axios.get(`${baseUrl}/auth/users/me/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            const roles = resMe.data["roles"];

            localStorage.setItem('user-role', roles)
            localStorage.setItem('user-token', token)

            /*if (authStore.isRem) {
                cookieStore.setCookie(token, roles, 7);
            } else {
                cookieStore.setCookie(token, roles, 0.006);
            }*/

            if (roles.find(r => r == "student")) {
                nav(`/${AppRoutes.skillget}/${AppRoutes.student}`);

                return
            }
            if (roles.find(r => accessRoutes['lecturer'].find(lr => lr == r))) {
                nav(`/${AppRoutes.skillget}/${AppRoutes.lecturer}`);
            }

        } catch (err) {
            authStore.setIsFetchError(true)
        }
    }

    useEnter(auth);

    return {
        auth: auth
    };
};