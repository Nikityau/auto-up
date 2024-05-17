import React from 'react';

import './index.scss'
import {navData} from "./data";
import AppLink from "../../features/app-link";

const Navigation = () => {
    return (
        <div className={'navigation'}>
            {
                navData.map(d => (
                    <AppLink
                        key={d.id}
                        id={d.id}
                        icon={d.icon}
                        link={d.link}
                        title={d.title}
                    />
                ))
            }
        </div>
    );
};

export default Navigation;