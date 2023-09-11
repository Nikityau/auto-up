import React, { useState } from 'react';
import { FType } from '../../helpers/types/f-types';

import './style/index.scss'

type Props = {
    onChange: FType<string, void>
    type?: 'text' | 'password',
    placeholder?: string
}

const Login = ({ onChange, type = 'text', placeholder = 'Логин' }: Props) => {
    const [state, setState] = useState<string>("")

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const str = e.target.value
        setState(str)
        onChange(str)

        return;
    }

    return (
        <input
            className='input'
            onChange={onTextChange}
            type={type}
            value={state}
            placeholder={placeholder}
        />
    );
};

export default Login;