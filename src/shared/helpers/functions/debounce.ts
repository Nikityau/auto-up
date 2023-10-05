import { FType } from "../types/f-types";

export const debounce = (cb: FType<any, void>, ms: number) => {
  let key = null;

  return (...args: any[]) => {
    if (key) {
      clearTimeout(key)
      key = null
    }

    key = setTimeout(() => {
      cb(args)
    }, ms)
  };
};