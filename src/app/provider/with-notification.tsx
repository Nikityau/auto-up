import React, { useState } from 'react'
import { FType } from '../../shared/helpers/types/f-types'
import {Notification} from '../../enteties/notify'

type INotifsContext = {
  notifs: Notification[],
  addNotif: FType<Notification, void>
  removeNotif: FType<Notification, void>
}

export const NotifsContext = React.createContext<INotifsContext>(null)

const WithNotification = ({children}:React.PropsWithChildren) => {

  const [notifs, setNotifs] = useState<Notification[]>()

  const addNotif = (notif: Notification) => {
    
  }

  const removeNotif = (notif: Notification) => {

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