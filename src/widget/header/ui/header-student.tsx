import React from 'react';
import { studentLinks } from '../data/nav-links';
import NavLinkApp from './nav-link';

const HeaderStudents = () => {
    return (
        <>
           {
                studentLinks.map(l => (
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

export default HeaderStudents;