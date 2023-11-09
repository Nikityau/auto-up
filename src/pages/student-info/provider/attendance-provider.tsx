import React from 'react';
import {observer} from "mobx-react-lite";

type Props = {
} & React.PropsWithChildren

export const AttContext = React.createContext(null)

const AttendanceProvider = observer(({children,}:Props) => {

    return (
        <AttContext.Provider value={{

        }}>
            {children}
        </AttContext.Provider>
    );
});

export default AttendanceProvider;