import React from 'react';
import BackBtn from "../../feature/back-btn";
import Code from "./ui/code";
import Description from "./ui/description";
import VerifyProvider from "./provider/verify.provider";
import Btns from "./ui/btns";

import './style/index.scss'

const VerifyTest = () => {
    return (
        <VerifyProvider>
            <div className={'verify-test-page'}>
                <div className={'verify-test-page__container app-container'}>
                    <BackBtn/>
                    <div className={'verify-test-page__wrapper'}>
                        <Code/>
                        <Description/>
                    </div>
                   <Btns/>
                </div>
            </div>
        </VerifyProvider>
    );
};

export default VerifyTest;