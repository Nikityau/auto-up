import React from 'react';
import {FType} from "../../../shared/helpers/types/f-types";
import cn from "classnames";

type Props = {
    text: string,
    onClick: FType<void, void>,
    classNames: string[] | string
}

const Btn = ({onClick, text,classNames}:Props) => {
    return (
        <div className={cn(
            'verify-btn',
            classNames
        )} onClick={() => onClick()}>
            <p>{text}</p>
        </div>
    );
};

export default Btn;