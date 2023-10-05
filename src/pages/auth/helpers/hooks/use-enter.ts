import { useEffect } from "react";

import { FType } from "../../../../shared/helpers/types/f-types";

export const useEnter = (cb: FType<void, void>) => {
  useEffect(() => {
    const keyEvent = (e: KeyboardEvent) => {
      if(e.key == 'Enter') {
        cb()
      }
    }

    window.addEventListener('keydown', keyEvent)

    return () => {
      window.removeEventListener('keydown', keyEvent)
    }

  }, [])
}