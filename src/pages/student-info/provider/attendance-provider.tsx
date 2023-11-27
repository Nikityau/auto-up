import React from 'react';

type Props = {
} & React.PropsWithChildren

export const AttContext = React.createContext(null)

const AttendanceProvider = ({children}:Props) => {

    return (
        <AttContext.Provider value={{

        }}>
            {children}
        </AttContext.Provider>
    );
};

export default AttendanceProvider;