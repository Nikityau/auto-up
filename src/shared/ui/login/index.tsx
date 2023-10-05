import React, { useState } from 'react';
import { FType } from '../../helpers/types/f-types';

import './style/index.scss'
import cn from "classnames";

type Props = {
    onChange: FType<string, void>
    type?: 'text' | 'password',
    placeholder?: string,
    title?: string,
    isError?: boolean
}

const Login = ({ onChange, type = 'text', placeholder = 'Логин',title = 'Логин', isError = false }: Props) => {
    const [state, setState] = useState<string>("")

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const str = e.target.value
        setState(str)
        onChange(str)

        return;
    }

    return (
        <div className={cn(
          'input-ui',
          isError && 'input-ui_error'
        )}>
            <input
              className='input'
              onChange={onTextChange}
              type={type}
              value={state}
              placeholder={null}
            />
            <div className={'input-ui__title'}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default Login;