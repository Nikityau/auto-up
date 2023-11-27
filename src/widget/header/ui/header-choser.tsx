import React from 'react';
import HeaderStudent from './header-student';
import HeaderLecturer from './header-lecturer';

type Props = {
}

const HeaderChoser = ({}:Props) => {

    if(localStorage.getItem('user-role') == 'student') {
        return <HeaderStudent/>
    }

    return <HeaderLecturer/>
};

export default HeaderChoser