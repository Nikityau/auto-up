import React from 'react';
import { studentLinks } from '../data/nav-links';
import NavLink from './nav-link';

const HeaderStudents = () => {
    return (
        <>
           {
                studentLinks.map(l => (
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

export default HeaderStudents;