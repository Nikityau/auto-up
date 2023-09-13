import React from 'react';
import { Group, useFetchGroup } from '../helpers/hooks/use-fetch-group';

interface GroupContext {
    group: Group
}

export const GroupContext = React.createContext<GroupContext>(null)

const GroupProvider = ({ children }: React.PropsWithChildren) => {

    const group = useFetchGroup()

    return (
        <GroupContext.Provider value={{
            group
        }}>
            {children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;