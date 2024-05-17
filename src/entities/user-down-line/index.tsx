import React, {FC} from 'react';
import cn from 'classnames'
import {TUserDownLine} from "./index.type";
import TextWithTip from "../../shared/ui/text-with-tip/text-with-tip";

import './index.scss'

const UserDownLine: FC<TUserDownLine> = (
    {
        memory,
        name,
        traffic,
        isActive,
        id
    }) => {
    return (
        <div className={'user-down-line'}>
            <div className={'user-down-line__left'}>
                <div className={cn(
                    'user-down-line__status-dot',
                    isActive && 'user-down-line__status-dot_active'
                )}>
                </div>
                <span>{name}</span>
            </div>
            <div className={'user-down-line__right'}>
                <TextWithTip
                    text={`${traffic} гбит`}
                    tip={'Трафика израсходновано'}
                />
                <TextWithTip
                    text={`${memory} гб`}
                    tip={'Скачанные гигабайты'}
                />
            </div>
        </div>
    );
};

export default UserDownLine;