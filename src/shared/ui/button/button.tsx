import React, {FC} from 'react';
import cn from 'classnames'

import './index.scss'

type Props = {
    text: string,
    onClick: () => void,
    classNames?: string | string[]
}

const Button: FC<Props> = (
    {
        onClick,
        text,
        classNames
    }) => {
    return (
        <div
            className={cn('button-ui', classNames)}
            onClick={onClick}
        >
            { text }
        </div>
    );
};

export default Button;