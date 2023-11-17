import React, {useContext} from "react";
import {observer} from "mobx-react-lite";

import {LoaderContext} from "../../app/provider/with-loader";

import './style/index.scss'


const Loader = observer(() => {

    const {loadList} = useContext(LoaderContext)

    if(!loadList) return null

    return (
        <div className={'loader-page'}>
            <div className={'loader'}>
                <div className={'loader__bal loader__ball_black'}/>
                <div className={'loader__bal loader__ball_red'}/>
                <div className={'loader__bal loader__ball_blue'}/>
            </div>
        </div>
    );
});

export default Loader;