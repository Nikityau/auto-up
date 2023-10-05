import React from 'react';

const AuthProvider = ({ children }: React.PropsWithChildren) => {

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider