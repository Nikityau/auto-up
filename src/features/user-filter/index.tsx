import React, {FC, useEffect, useRef} from 'react';
import cn from 'classnames'
import {TUserFilter} from "../../entities/user-down-line/index.type";

import './index.scss'

type Props = {
    active: TUserFilter,
    onClick: (type: TUserFilter) => void
}

const UserFilter: FC<Props> = (
    {
        active,
        onClick
    }) => {

    const activeRef = useRef<HTMLDivElement | null>(null);
    const pointerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const leftOffset = activeRef.current.offsetLeft;
        const width = activeRef.current.offsetWidth;
        const selfWidth = pointerRef.current.offsetWidth;

        if(active === 'all') {
            pointerRef.current.style.transform = `translate(0, 0)`
        } else {
            pointerRef.current.style.transform = `translate(${leftOffset - selfWidth / 4}px, 0)`
        }

        pointerRef.current.style.width = `${width}px`
    }, [activeRef, active])

    return (
        <div className={'user-filter'}>
            <div
                className={'user-filter__pointer'}
                ref={pointerRef}
            >
            </div>
            <div
                className={cn(
                    'user-filter__filter',
                    active === 'all' && 'user-filter__filter_active'
                )}
                ref={active === 'all' ? activeRef : null}
                onClick={() => onClick('all')}
            >
                Все
            </div>
            <div
                className={cn(
                    'user-filter__filter',
                    active === 'active' && 'user-filter__filter_active'
                )}
                ref={active === 'active' ? activeRef : null}
                onClick={() => onClick('active')}
            >
                Активные
            </div>
        </div>
    );
};

export default UserFilter;