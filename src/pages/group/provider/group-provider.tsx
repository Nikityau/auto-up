import React from 'react';
import { useFetchGroup } from '../helpers/hooks/use-fetch-group';
import {Group} from "../helpers/hooks/types/group";

interface GroupContext {
    group: Group
}

export const GroupContext = React.createContext<GroupContext>(null)

type Props = {

} & React.PropsWithChildren

const GroupProvider = ({ children }: Props) => {

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