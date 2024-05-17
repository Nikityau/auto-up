import React from 'react';
import {allFiles} from "../../all-files/data";
import UploadFileWrapper from "./upload-file-wrapper";

const Right = () => {
    return (
        <div className={'upload-files__right'}>
            <h2>Загруженные файлы</h2>
            <div className={'upload-files__list'}>
                {
                    allFiles.map(el => (
                        <UploadFileWrapper
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            version={el.version}
                            dateUpload={el.dateUpload}
                            adminName={el.adminName}
                            icon={el.icon}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Right;