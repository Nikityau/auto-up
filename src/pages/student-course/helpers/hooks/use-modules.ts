import {useEffect, useState} from "react";
import {IModule} from "../../store/module";
import {courseEM} from "../../store/course-em";

export const useModules = () => {
    const [module, setModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)

    useEffect(() => {
        const unsubModules = courseEM.on('modules', (data: IModule[]) => {
            setModules(data)
        })
        const unsubModule = courseEM.on('module', (data: IModule) => {
            setModule(data)
            courseEM.emit('fetch-lessons')
        })

        return () => {
            unsubModules()
            unsubModule()
        }
    }, [])

    const onSetModule = (module: IModule) => {
        courseEM.emit('set-module', module)
    }

    return {
        module,
        modules,
        onSetModule
    }
}