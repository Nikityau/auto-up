import React from 'react';
import Greetings from "./ui/greetings";
import Btn from "../../shared/ui/btn";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../shared/app-routes";

import './style/index.scss'

const TestFinished = () => {

    const nav = useNavigate()

    const onClick = () => {
        nav(`/${AppRoutes.skillget}/${AppRoutes.student}`)
    }

    return (
        <div className={'test-finished'}>
            <div className={'test-finished__container app-container'}>
                <Greetings/>
                <Btn
                    classNames={[
                        'test-finished__btn'
                    ]}
                    text={'Продолжить'}
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default TestFinished;