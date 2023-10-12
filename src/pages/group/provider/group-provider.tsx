import React from 'react';
import { Group, useFetchGroup } from '../helpers/hooks/use-fetch-group';
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

interface GroupContext {
    group: Group
}

export const GroupContext = React.createContext<GroupContext>(null)

type Props = {
    loader: LoaderStore,
    error: ErrorStore
} & React.PropsWithChildren

const GroupProvider = ({ children, loader, error }: Props) => {

    const group = useFetchGroup(loader, error)

    return (
        <GroupContext.Provider value={{
            group
        }}>
            {children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;