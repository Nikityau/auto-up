import React from 'react';
import {Outlet} from 'react-router-dom'
import {observer} from "mobx-react-lite";

import bg from './assets/grid.svg'
import {UserStore} from "../../local-store/user/user-store";
import { loaderStore } from "../../local-store/loader/loader-store";
import Loader from "../../widget/loader";

import './style/index.scss'

type Props = {
    user: UserStore
}

const BasePage = observer(({user}:Props) => {
    return (
        <div className='app'
             style={{
                 backgroundImage: `url(${bg})`
             }}
        >
            <Outlet/>
          <Loader loader={loaderStore}/>
        </div>
    );
});

export default BasePage;