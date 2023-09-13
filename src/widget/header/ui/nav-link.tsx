import React from 'react';
import cn from 'classnames'
import { NavLink } from 'react-router-dom';

type Props = {
    link: string,
    text: string,
}

const NavLinkApp = ({ link, text }: Props) => {


    return (
        <NavLink to={link}
            className={({isActive}) => isActive ? 'nav-link__current' : ''}
        >
            <div className={cn(
                'nav-link'
            )}>
                <span>{text}</span>
            </div>
        </NavLink>
    );
};

export default NavLinkApp;