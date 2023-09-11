import React from 'react';
import Login from '../login';
import { useToggle } from '../../helpers/hooks/use-toggle';
import { FType } from '../../helpers/types/f-types';

import './style/index.scss'

import img from './assets/eye.png'

type Props = {
    onChange: FType<string, void>
}

const Password = ({onChange}: Props) => {
    const [is, f] = useToggle()

    return (
        <div className='password'>
            <Login 
                onChange={onChange}
                placeholder='Пароль'
                type={
                    is ? 'text' : 'password'
                }
            />
            <div className='password__swticher' onClick={f.swtch}> 
                <img src={img} alt={'switch'}/>
            </div>
        </div>
    );
};

export default Password;