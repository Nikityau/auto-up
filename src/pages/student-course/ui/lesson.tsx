import React from 'react';
import cn from "classnames";
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
    number: number,
    classNames?: string[],
    onClick: FType<void, void>
}

const Lesson = ({number, classNames, onClick}:Props) => {
    return (
        <div className={cn(
            'lesson',
            classNames
        )}onClick={() => onClick()}
        >
            <span>Урок {number}</span>
        </div>
    );
};

export default Lesson;