import React from 'react';
import { Group, useFetchGroup } from '../helpers/hooks/use-fetch-group';
import { LoaderStore } from "../../../local-store/loader/loader-store";

interface GroupContext {
    group: Group
}

export const GroupContext = React.createContext<GroupContext>(null)

type Props = {
    loader: LoaderStore
} & React.PropsWithChildren

const GroupProvider = ({ children, loader }: Props) => {

    const group = useFetchGroup(loader)

    return (
        <GroupContext.Provider value={{
            group
        }}>
            {children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;