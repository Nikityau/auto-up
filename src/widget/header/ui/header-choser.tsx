import React from 'react';
import { observer } from 'mobx-react-lite';
import HeaderStudent from './header-student';
import HeaderLecturer from './header-lecturer';

type Props = {
    role: string
}

const HeaderChoser = observer(({role}:Props) => {
    return (
        <>
            {
                role == 'student' 
                ? <HeaderStudent/>
                : <HeaderLecturer/>
            }
        </>
    );
});

export default HeaderChoser