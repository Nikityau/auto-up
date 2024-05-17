import React, {FC} from 'react';
import {TAppLine} from "../../../entities/app-line/index.type";
import AppLine from "../../../entities/app-line";

type Props = {
    status: 'deleted' | 'installed'
} & TAppLine

const UserAppWrapper: FC<Props> = (
    {
        status,
        version,
        adminName,
        id,
        title,
        icon,
        dateUpload
    }) => {
    return (
        <div className={'user-app-wrapper'}>
            <AppLine
                id={id}
                title={title}
                adminName={adminName}
                dateUpload={dateUpload}
                version={version}
                icon={icon}
            >
                <span><b>{status === 'deleted' ? 'удалено' : 'установлено'}</b></span>
            </AppLine>
        </div>
    );
};

export default UserAppWrapper;