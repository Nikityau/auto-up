import React from 'react';
import {FType} from "../../../shared/helpers/types/f-types";
import Btn from "./btn";

type Props = {
    onNext: FType<any, void>
    onPrev: FType<any, void>
}

const DaySwitcher = ({onNext,onPrev}:Props) => {
    return (
        <div className={'day-control-panel__control'}>
            <Btn onClick={onPrev}
                classNames={'day-control-panel__control_left'}
            />
            <Btn onClick={onNext}
                classNames={'day-control-panel__control_right'}
            />
        </div>
    );
};

export default DaySwitcher;