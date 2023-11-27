import React from 'react';
import { observer } from 'mobx-react-lite'
import { FType } from '../../../shared/helpers/types/f-types';
import Switcher from '../../../shared/ui/switcher';

type Props = {
    state: boolean
    onChange: FType<boolean, void>
}

const AuthSwitcher = observer(({onChange, state}:Props) => {
    return (
       <Switcher
            init={state}
            onChange={onChange}
            text='Запомнить'
       />
    );
});

export default AuthSwitcher;