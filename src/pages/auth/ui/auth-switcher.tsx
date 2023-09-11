import React from 'react';
import { observer } from 'mobx-react-lite'
import { FType } from '../../../shared/helpers/types/f-types';
import Switcher from '../../../shared/ui/switcher';

type Props = {
    state: boolean
    onChagnge: FType<boolean, void>
}

const AuthSwitcher = observer(({onChagnge, state}:Props) => {
    return (
       <Switcher
            init={state}
            onChange={onChagnge}
            text='Запомнить'
       />
    );
});

export default AuthSwitcher;