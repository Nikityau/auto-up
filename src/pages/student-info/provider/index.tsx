import React from 'react';
import { useFetchStInfo } from "../helpers/hooks/use-fetch-st-info";
import { CookieStore } from "../../../local-store/cookie/cookie-store";

export const StudentInfoContext = React.createContext(null)

type Props = {
    cookie: CookieStore
} & React.PropsWithChildren


const StudentInfoProvider = ({children, cookie}:Props) => {

    const stInfo = useFetchStInfo(cookie)

    return (
        <StudentInfoContext.Provider value={null}>
            {children}
        </StudentInfoContext.Provider>
    );
};

export default StudentInfoProvider;