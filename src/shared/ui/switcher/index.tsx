import React from 'react';
import cn from 'classnames'

import { FType } from "../../helpers/types/f-types";
import { useToggle } from "../../helpers/hooks/use-toggle";

import './style/index.scss'

type Props = {
    init?: boolean
    onChange: FType<boolean, void>,
    text?: string | null
}

const Switcher = ({ onChange, text = null, init = false }: Props) => {

    const [is, f] = useToggle(init)

    const onClick = () => {
        f.swtch(null)
        onChange(!is)
    }

    return (
        <div
            className={cn(
                'switcher',
                is ? 'switcher_on' : 'switcher_off'
            )}
            onClick={onClick}
        >
            <div className='switcher__btn'>
                <div className='switcher__circle'></div>
            </div>
            {
                text
                    ?
                    <div className='switcher__text'>
                        <span>{text}</span>
                    </div>
                    : null
            }
        </div>
    );
};

export default Switcher;