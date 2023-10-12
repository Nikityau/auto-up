import React, {useContext} from 'react';
import Btn from "./btn";
import {VerifyContext} from "../provider/verify.provider";

const Btns = () => {

    const {onSetStatus} = useContext(VerifyContext)

    return (
        <div className={'verify-test-page__btn'}>
            <Btn
                text={'Верно'}
                 onClick={() => onSetStatus('approved')}
                 classNames={['verify_right']}
            />
            <Btn
                text={"Неверно"}
                onClick={() => onSetStatus('wrong')}
                classNames={['verify_not_right']}
            />
        </div>
    );
};

export default Btns;