import React from 'react';
import { lecturerLinks } from '../data/nav-links';
import NavLinkApp from './nav-link';

const HeaderLecturer = () => {
    return (
        <>
            {
                lecturerLinks.map(l => (
                    <NavLinkApp
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