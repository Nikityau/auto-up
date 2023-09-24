import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {UserStore} from "../../local-store/user/user-store";

type Props = {
    user: UserStore
} & React.PropsWithChildren

const RouteWatcher = observer(({user, children}:Props) => {

    return (
        <>
            {children}
        </>
    );
});

export default RouteWatcher;