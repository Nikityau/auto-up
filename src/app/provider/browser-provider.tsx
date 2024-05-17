import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";

const BrowserProvider: FC<React.PropsWithChildren> = (
    {
        children
    }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default BrowserProvider;