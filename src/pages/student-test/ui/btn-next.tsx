import React from 'react';
import {TestStore} from "../store/test-store";
import {observer} from "mobx-react-lite";

type Props = {
    testStore: TestStore
}

const BtnNext = observer(({testStore}:Props) => {
    return (
        <div className={'test-page__btn'} onClick={() => testStore.setNextTask()}>
            <div className={'test-page__btn-title'}>
                <span>Продолжить</span>
            </div>
            <div className={'test-page__btn-icon'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                    <path d="M10.4008 7.80039L13.6008 11.0004M10.4008 14.2004L13.6008 11.0004M13.6008 11.0004H7.20078M20.0008 11.0004C20.0008 16.3023 15.7027 20.6004 10.4008 20.6004C5.09884 20.6004 0.800781 16.3023 0.800781 11.0004C0.800781 5.69846 5.09884 1.40039 10.4008 1.40039C15.7027 1.40039 20.0008 5.69846 20.0008 11.0004Z" stroke="white"/>
                </svg>
            </div>
        </div>
    );
});

export default BtnNext;