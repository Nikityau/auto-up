import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const WithRouter = ({children}:React.PropsWithChildren) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default WithRouter;