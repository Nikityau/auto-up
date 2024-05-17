import React, {useState} from 'react';
import {TAppLine} from "../../entities/app-line/index.type";
import AppLine from "../../entities/app-line";
import {allFiles} from "./data";

import './index.scss'

const AllFiles = () => {
    const [search, setSearch] = useState<string>('')
    const [files, setFiles] = useState<Array<TAppLine>>(allFiles)

    const filesFiltered = files.filter(f => {
        if(search.length === 0) return true

        return f.title.includes(search)
    })

    return (
        <div className={'all-files'}>
            <input
                className={'all-files__search'}
                placeholder={'Поиск'}
                value={search}
                onChange={({target: {value}}) => setSearch(value)}
            />
            <div className={'all-files__list'}>
                {
                    filesFiltered.map(f => (
                        <AppLine
                            key={f.id}
                            id={f.id}
                            title={f.title}
                            adminName={f.adminName}
                            dateUpload={f.dateUpload}
                            version={f.version}
                            icon={f.icon}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllFiles;