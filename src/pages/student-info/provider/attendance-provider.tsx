import React from 'react';
import {CookieStore} from "../../../local-store/cookie/cookie-store";
import {observer} from "mobx-react-lite";

type Props = {
    cookie: CookieStore
} & React.PropsWithChildren

export const AttContext = React.createContext(null)

const AttendanceProvider = observer(({children,cookie}:Props) => {

    return (
        <AttContext.Provider value={{

        }}>
            {children}
        </AttContext.Provider>
    );
});

export default AttendanceProvider;