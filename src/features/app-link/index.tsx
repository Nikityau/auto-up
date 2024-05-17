import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {TAppLink} from "./index.type";

import './index.scss'

const AppLink: FC<TAppLink> = (
    {
        link,
        id,
        title,
        icon
    }) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) => {
                const styles = ['nav-link']

                if(isActive) styles.push('nav-link_active')

                return cn(styles)
            }}
        >
            {icon}
            <span>{title}</span>
        </NavLink>
    );
};

export default AppLink;