import React, {FC} from 'react';
import {TAppLine} from "./index.type";
import TextWithTip from "../../shared/ui/text-with-tip/text-with-tip";

import './index.scss'


const AppLine: FC<TAppLine & React.PropsWithChildren> = (
    {
        dateUpload,
        title,
        version,
        adminName,
        id,
        icon,
        children
    }) => {
    return (
        <div className={'app-line'}>
            <div className={'app-line__left'}>
                <div className={'app-line__icon'}
                    style={{
                        backgroundImage: `url(${icon})`
                    }}
                >
                </div>
                <span>{title}</span>
            </div>
            <div className={'app-line__right'}>
                <TextWithTip
                    text={version}
                    tip={'Версия приолжения'}
                />
                <TextWithTip
                    text={dateUpload}
                    tip={'Дата загрузки/обновлния'}
                />
                <span><b>{adminName}</b></span>
                {children}
            </div>
        </div>
    );
};

export default AppLine;