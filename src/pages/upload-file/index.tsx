import React from 'react';
import Left from "./ui/left";
import Right from "./ui/right";

import './index.scss'

const UploadFile = () => {
    return (
        <div className={'upload-files'}>
            <Left/>
            <Right/>
        </div>
    );
};

export default UploadFile;