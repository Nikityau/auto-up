import React from 'react';

export const StudentInfoContext = React.createContext(null)

const StudentInfoProvider = ({children}:React.PropsWithChildren) => {
    return (
        <StudentInfoContext.Provider value={null}>
            {children}
        </StudentInfoContext.Provider>
    );
};

export default StudentInfoProvider;