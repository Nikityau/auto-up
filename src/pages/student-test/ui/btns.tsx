import React, {useContext} from 'react';
import BtnNext from "./btn-next";
import Btn from "../../../shared/ui/btn";
import {TestStore} from "../store/test-store";
import {TaskContext} from "../provider/task-complete-watcher";

type Props = {
    testStore: TestStore
}

const Btns = ({testStore}:Props) => {

    const {onSendSolution} = useContext(TaskContext)

    return (
        <div className={'test-page__btn-wrapper'}>
            <Btn classNames={['test-page__btn_send']} text={'Отправить'} onClick={() => onSendSolution()}/>
            <BtnNext testStore={testStore}/>
        </div>
    );
};

export default Btns;