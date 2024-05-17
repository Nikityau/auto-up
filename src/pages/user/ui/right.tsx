import React from 'react';
import {allFiles} from "../../all-files/data";
import UserAppWrapper from "./user-app-wrapper";

const Right = () => {
    return (
        <div className={'user-files__right'}>
            <h2>Скачанные приложения</h2>
            <div className={'user-files__list'}>
                {
                    allFiles.map(af => (
                        <UserAppWrapper
                            key={af.id}
                            icon={af.icon}
                            version={af.version}
                            dateUpload={af.dateUpload}
                            adminName={af.adminName}
                            title={af.title}
                            id={af.id}
                            status={'deleted'}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Right;