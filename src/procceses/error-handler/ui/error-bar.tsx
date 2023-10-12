import React from 'react';
import {IError} from "../../../local-store/error-store";
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
    number: number
    onClose: FType<IError, void>
} & IError

const ErrorBar = ({id, title, description,onClose, number}:Props) => {


    return (
        <div className={'error-bar'}
            style={{
                transform: `translate(0, -${number * 75}px)`
            }}
        >
            <p>{title}</p>
            <p>{description}</p>
            <div className={'error-bar__close'} onClick={() => onClose({id, title, description})}>
                <p>закрыть</p>
            </div>
        </div>
    );
};

export default ErrorBar;