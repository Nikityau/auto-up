import React from 'react';
import { lecturerLinks } from '../data/nav-links';
import NavLink from './nav-link';

const HeaderLecturer = () => {
    return (
        <>
            {
                lecturerLinks.map(l => (
                    <NavLink
                        key={l.id}
                        link={l.link}
                        text={l.text}
                    />
                ))
            }
        </>
    );
};

export default HeaderLecturer;