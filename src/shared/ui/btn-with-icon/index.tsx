import React from 'react';
import {FType} from "../../helpers/types/f-types";

import './style/index.scss'
import cn from "classnames";

type Props = {
    title: string,
    classNames?: string | string[]
    onClick?: FType<void, void>
}

const ButtonWithIcon = ({title,onClick, classNames}:Props) => {
    return (
        <div className={cn(
            'btn-with-icon',
            classNames
        )}
            onClick={() => {
                onClick?.()
            }}
        >
            <span>{title}</span>
            <div className='btn-with-icon__continue'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 17L15 12L10 7" stroke="white" />
                </svg>
            </div>
        </div>
    );
};

export default ButtonWithIcon;