import React, {FC} from 'react';
import {TAppLine} from "../../../entities/app-line/index.type";
import AppLine from "../../../entities/app-line";

type Props = {} & TAppLine

const UploadFileWrapper: FC<Props> = (
    {
        dateUpload,
        title,
        version,
        adminName,
        id,
        icon
    }) => {
    return (
        <AppLine
            id={id}
            title={title}
            version={version}
            dateUpload={dateUpload}
            adminName={adminName}
            icon={icon}
        >
            <span data-file-upd>Обновить</span>
        </AppLine>
    );
};

export default UploadFileWrapper;