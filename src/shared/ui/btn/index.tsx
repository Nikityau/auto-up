import React from 'react';
import cn from 'classnames'
import { FType } from '../../../shared/helpers/types/f-types';

import './style/index.scss'

type Props = {
    text: string
    onClick: FType<null, void>
    classNames?: string[]
}

const Btn = ({onClick, text, classNames}:Props) => {
    return (
        <div className={cn(
            'btn-ui',
            classNames
        )} onClick={onClick}>
            <span>{text}</span>
        </div>
    );
};

export default Btn;