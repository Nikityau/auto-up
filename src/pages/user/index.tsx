import React from 'react';
import Left from "./ui/left";

import './index.scss'
import Right from "./ui/right";

const UserFiles = () => {
    return (
        <div className={'user-files'}>
            <Left/>
            <Right/>
        </div>
    );
};

export default UserFiles;