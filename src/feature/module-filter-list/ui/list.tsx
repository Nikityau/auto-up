import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import cn from 'classnames'
import { ModuleListContext } from '../provider/module-list-provider';
import { Module } from "../index";

type Props = {
    modules: Module[]
}

const ModuleList = ({modules}:Props) => {

    const {current, setCurrentModule} = useContext(ModuleListContext)

    return (
        <div className='module-list__list'>
            <div className='module-list__subtitle'>
                <span>Модули:</span>
            </div>
            <div className='module-list__container'>
                {
                    modules?.map(el => (
                        <div className={cn(
                            'module-list__module',
                            current == el && 'module-list__module_curr'
                        )}
                            key={nanoid()}
                            onClick={() => {
                                setCurrentModule(el)
                            }}
                        >
                            <span>{el.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ModuleList;