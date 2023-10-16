import React from "react";
import cn from "classnames";

import { useToggle } from "../../helpers/hooks/use-toggle";
import { FType } from "../../helpers/types/f-types";

import './style/index.scss'

import img from './assets/galka.svg'

type Props = {
  state: boolean,
  text?: string,
  onChange: FType<boolean, void>
}

const Checkbox = ({state, text, onChange}:Props) => {
  const [is, {swtchManual}] = useToggle(state)
  const onChangeState = () => {
    swtchManual(!is)
    onChange(!is)
  }

  return (
    <div className={cn(
      'checkbox-ui',
      is && 'checkbox-ui_checked'
      )}
    onClick={() => onChangeState()}
    >
      <div className={'checkbox-ui__box'}>
        <img src={img} alt={'galka'}/>
      </div>
      {
        text &&
        <div className={'checkbox-ui__text'}>
          <span>{text}</span>
        </div>
      }
    </div>
  );
};

export default Checkbox;