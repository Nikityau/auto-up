import React, { useState } from 'react'
import { FType } from '../../shared/helpers/types/f-types'
import {Notification} from '../../enteties/notify'
import produce from 'immer'

type INotifsContext = {
  notifs: Notification[],
  addNotif: FType<Notification, void>
  removeNotif: FType<Notification, void>
}

export const NotifsContext = React.createContext<INotifsContext>(null)

const WithNotification = ({children}:React.PropsWithChildren) => {

  const [notifs, setNotifs] = useState<Notification[]>(() => [])

  const addNotif = (notif: Notification) => {
      setNotifs(prev => {
        return produce(prev, draft => {
          draft.push(notif)

          return draft
        })
      })
  }

  const removeNotif = (notif: Notification) => {
      setNotifs((prev) => {
        return produce(prev, draft => {
          return draft.filter(n => n.id != notif.id)
        })
      })
  }

  return (
    <NotifsContext.Provider value={{
      notifs,
      addNotif,
      removeNotif
    }}>
        {children}
    </NotifsContext.Provider>
  )
}

export default WithNotification