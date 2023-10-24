import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const WithQuery = ({children}:React.PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default WithQuery;