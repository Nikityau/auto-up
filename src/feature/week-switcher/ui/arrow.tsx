import React from "react";
import { FType } from "../../../shared/helpers/types/f-types";
import cn from "classnames";

type Props = {
  classNames?: string[] | string,
  onClick: FType<void, void>
}

const Arrow = ({classNames, onClick}:Props) => {
  return (
    <div className={cn(
      'week-switcher__arrow',
      classNames
    )} onClick={() => onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M6 0.999998L1 6L6 11" stroke="#191617"/>
      </svg>
    </div>
  );
};

export default Arrow;