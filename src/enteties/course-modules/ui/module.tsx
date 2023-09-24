import React from 'react';
import cn from "classnames";
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
    title: string,
    classNames: string[],
    onClick: FType<void, void>
}

const Module = ({classNames, title, onClick}:Props) => {
    return (
        <div className={cn(
            'course-modules__module',
            classNames
        )}
            onClick={() => onClick()}
        >
            <span>{title}</span>
        </div>
    );
};

export default Module;