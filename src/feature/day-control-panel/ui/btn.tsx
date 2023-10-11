import React from 'react';
import cn from "classnames";
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
    classNames?: string[] | string
    onClick: FType<any, void>
}

const Btn = ({onClick, classNames}: Props) => {
    return (
        <div className={cn(
            "day-control-panel__control-btn",
            classNames,
        )}
             onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M6 0.999998L1 6L6 11" stroke="#191617" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default Btn;