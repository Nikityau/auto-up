import React from 'react';
import {useFetchAtt} from "../helpers/hooks/use-fetch-att";
import {CookieStore} from "../../../local-store/cookie/cookie-store";
import {observer} from "mobx-react-lite";

type Props = {
    cookie: CookieStore
} & React.PropsWithChildren

export const AttContext = React.createContext(null)

const AttendanceProvider = observer(({children,cookie}:Props) => {

    const {user} = useFetchAtt(cookie.token)

    return (
        <AttContext.Provider value={{
            user
        }}>
            {children}
        </AttContext.Provider>
    );
});

export default AttendanceProvider;