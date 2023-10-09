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
    <div className={'loader'}>
      L.O.A.D.I.N.G. ...
    </div>
  );
});

export default Loader;