import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const WithQuery = (node:React.ReactNode) => () => {
    return (
        <QueryClientProvider client={queryClient}>
            {node}
        </QueryClientProvider>
    );
};

export default WithQuery;