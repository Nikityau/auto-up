import React, { useContext } from 'react'
import { NotifsContext } from '../../app/provider/with-notification'
import Notify from '../../enteties/notify'

import './style/index.scss'

function NotifcationBar() {

  const {notifs, removeNotif} = useContext(NotifsContext)

  return (
    <div className='notifications'>
       {
         notifs.map(n => (
            <Notify
               key={n.id}
               description={n.description}
               onClose={removeNotif}
               title={n.title}
               type={n.type}
               id={n.id}
            />
         ))
       }
    </div>
  )
}

export default NotifcationBar