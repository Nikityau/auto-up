import React from 'react';
import Btn from "./btn";
import {testStore} from "../store/test-store";

const Wrapper = () => {
    return (
        <>
            <div className={'test-page__plug'}/>
            <Btn testStore={testStore}/>
        </>
    );
};

export default Wrapper;