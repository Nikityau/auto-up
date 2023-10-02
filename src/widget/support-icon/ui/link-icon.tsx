import React, { useContext } from "react";
import { SupportIconI } from "../data/interface";
import { SupportIconContext } from "../provider/support-icon-provider";
import cn from "classnames";

type Props = {
  number: number
} & SupportIconI

const LinkIcon = (
  {
    number,
    link,
    img,
    id
  }:Props) => {

  const {state} = useContext(SupportIconContext)

  return (
    <div className={cn(
      'support-icon__link-icon',
      state && 'support-icon__link-icon_open'
    )}
      style={{
        transform: state && `translate(${number*50}px, 0)`
      }}
    >
      
    </div>
  );
};

export default LinkIcon;