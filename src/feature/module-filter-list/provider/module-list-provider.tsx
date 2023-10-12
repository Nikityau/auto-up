import React, { useEffect, useState } from "react";
import { FType } from '../../../shared/helpers/types/f-types';
import { Module } from "../index";

type Props = {
    modules: Module[],
    onChange: FType<Module, void>
} & React.PropsWithChildren

export const ModuleListContext = React.createContext(null)

const ModuleListProvider = ({children, modules, onChange}: Props) => {

    const [current, setCurrent] = useState<Module>(() => modules?.[0])

    useEffect(() => {
        if(!modules) return
        setCurrent(modules[0])
    }, [modules])

    const setCurrentModule = (value: Module) => {
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