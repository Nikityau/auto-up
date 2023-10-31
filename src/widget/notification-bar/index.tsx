import React, { useContext } from 'react'
import { NotifsContext } from '../../app/provider/with-notification'
import Notify from '../../enteties/notify'

import './style/index.scss'

function NotifcationBar() {

  const {addNotif, notifs, removeNotif} = useContext(NotifsContext)

  return (
    <div className='notifications'>
       <Notify
          title={'Error'}
          description={'404'}
          onClose={() => {}}
          type={'error'}
       />
       <Notify
          title={'Success'}
          description={'200'}
          onClose={() => {}}
          type={'success'}
       />
    </div>
  )
}

export default NotifcationBar