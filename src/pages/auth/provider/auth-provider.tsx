import React from 'react';
import { useAuth } from '../helpers/hooks/use-auth';

const AuthProvider = ({ children }: React.PropsWithChildren) => {

    useAuth()

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider