import React, { useState } from 'react';
import { FType } from '../../../shared/helpers/types/f-types';

type Props = {
    modules: string[],
    onChange: FType<string, void>
} & React.PropsWithChildren

export const ModuleListContext = React.createContext(null)

const ModuleListProvider = ({children, modules, onChange}: Props) => {

    const [current, setCurrent] = useState<string>(() => modules[0])

    const setCurrentModule = (value: typeof modules[0]) => {
        setCurrent(value)
        onChange?.(value)
    }

    return (
        <ModuleListContext.Provider value={{
            current,
            setCurrentModule
        }}>
            {children}
        </ModuleListContext.Provider>
    );
};

export default ModuleListProvider;