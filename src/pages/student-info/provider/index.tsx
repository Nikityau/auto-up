import React from 'react';
import {observer} from "mobx-react-lite";

import {CookieStore} from "../../../local-store/cookie/cookie-store";
import {useFetchUserInfo} from "../helpers/hooks/use-fetch-user-info";
import {LoaderStore} from "../../../local-store/loader/loader-store";
import {useFetchAtt} from "../helpers/hooks/use-fetch-att";

export const StudentInfoContext = React.createContext(null)

type Props = {
    cookie: CookieStore,
    loader: LoaderStore
} & React.PropsWithChildren


const StudentInfoProvider = observer(({children, cookie, loader}: Props) => {

    const user = useFetchUserInfo(cookie.token, loader)
    const att = useFetchAtt(cookie.token, loader)

    return (
        <StudentInfoContext.Provider value={{
            user
        }}>
            {children}
        </StudentInfoContext.Provider>
    );
});

export default StudentInfoProvider;