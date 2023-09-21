import React, { PropsWithChildren } from 'react';
import { useNavHistory } from './helpers/hooks/use-nav-history';

export const NavHistoryContext = React.createContext(null)

const NavHistory = ({children}:PropsWithChildren) => {

    const back = useNavHistory()

    return (
        <NavHistoryContext.Provider value={{
            back
        }}>
            {children}
        </NavHistoryContext.Provider>
    );
};

export default NavHistory