import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const WithRouter = (node:React.ReactNode) => () => {
    return (
        <BrowserRouter>
            {node}
        </BrowserRouter>
    );
};

export default WithRouter;