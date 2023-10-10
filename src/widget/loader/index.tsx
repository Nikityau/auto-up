import React from "react";
import { observer } from "mobx-react-lite";
import { LoaderStore } from "../../local-store/loader/loader-store";

import './style/index.scss'

type Props = {
  loader: LoaderStore
}

const Loader = observer(({loader}:Props) => {

  if(!loader.isLoading) {
    return null
  }

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