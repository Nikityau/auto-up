import React from 'react';
import Login from '../login';
import { useToggle } from '../../helpers/hooks/use-toggle';
import { FType } from '../../helpers/types/f-types';

import './style/index.scss'

import eye_open from './assets/eye-open.svg'
import eye_close from './assets/eye-close.svg'

type Props = {
    onChange: FType<string, void>
    isError?: boolean
}

const Password = ({onChange, isError = false}: Props) => {
    const [is, f] = useToggle()

    return (
        <div className='password'>
            <Login 
                onChange={onChange}
                placeholder={null}
                title={'Пароль'}
                type={
                    is ? 'text' : 'password'
                }
                isError={isError}
            />
            <div className='password__switcher' onClick={()=> f.swtch()}>
                <img src={is ? eye_open : eye_close} alt={'switch'}/>
            </div>
        </div>
    );
};

export default Password;