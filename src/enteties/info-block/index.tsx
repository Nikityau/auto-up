import React from 'react';
import cn from 'classnames'
import { useToggle } from '../../shared/helpers/hooks/use-toggle';

import './style/index.scss'

type Props = {
    title: JSX.Element,
    classNames?: string[],
    isOpen?: boolean
} & React.PropsWithChildren

const InfoBlock = ({ title, children, classNames, isOpen = false }: Props) => {

    const [is, { swtch }] = useToggle(isOpen)

    return (
        <div className={cn(
            'info-block',
            is ? 'info-block_open' : 'info-block_close',
            classNames
        )}>
            <div className='info-block__title'
                 onClick={() => swtch()}
            >
                {title}
                <div className='info-block__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13 9V17M17 13H9M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="black" />
                    </svg>
                </div>
            </div>
            <div className='info-bloc__info'>
                {children}
            </div>
        </div>
    );
};

export default InfoBlock;