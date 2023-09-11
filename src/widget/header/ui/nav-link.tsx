import React from 'react';
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom';

type Props = {
    link: string,
    text: string,
}

const NavLink = ({ link, text }: Props) => {

    const location = useLocation()

    return (
        <Link to={link}>
            <div className={cn(
                'nav-link',
                location.pathname.includes(link) 
                ? 'nav-link__current' : null
            )}>
                <span>{text}</span>
            </div>
        </Link>
    );
};

export default NavLink;