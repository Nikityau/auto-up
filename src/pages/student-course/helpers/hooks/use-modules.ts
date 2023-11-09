import {useEffect, useState} from "react";
import {IModule} from "../../store/module";
import {courseEM} from "../../store/course-em";
import {useLoader} from "../../../../shared/helpers/hooks/use-loader";
import {loaderStore} from "../../../../local-store/loader/loader-store";

export const useModules = () => {
    const [module, setModule] = useState<IModule>(null)
    const [modules, setModules] = useState<IModule[]>(null)
    const {off, on} = useLoader(loaderStore)

    useEffect(() => {
        const unsubModules = courseEM.on('modules', (data: IModule[]) => {
            setModules(data)
        })
        const unsubModule = courseEM.on('module', (data: IModule) => {
            setModule(data)
            courseEM.emit('fetch-lessons')
            on()
        })
        const unsubLessons = courseEM.on('lessons', () => {
            off()
        })

        return () => {
            unsubModules()
            unsubModule()
            unsubLessons()
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